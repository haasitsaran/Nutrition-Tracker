import google.generativeai as gen
import requests
import json
from PIL import Image

# Configure Gemini API
gen.configure(api_key="AIzaSyAYiJucyocACKAmyo2IxcHYUaWy9wK4r0E")  

def detectFood(image_path):
    model = gen.GenerativeModel('gemini-1.5-flash')  
    image = Image.open(image_path)

    try:
        response = model.generate_content(["Identify the food in this image in one word:", image])

        if response and hasattr(response, "text"):
            detected_food = response.text.strip().lower()  
            print(f"Detected Food: {detected_food}")
        else:
            detected_food = None
    except Exception as e:
        print(f"Error detecting food: {e}")
        detected_food = None
    finally:
        del model  

    return detected_food

def get_nutrition_info(food_item, api_key):
    endpoint = "https://api.spoonacular.com/recipes/guessNutrition"
    params = {"apiKey": api_key, "title": food_item}  

    try:
        response = requests.get(endpoint, params=params)
        response.raise_for_status()  
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"API request error: {e}")
        return {"error": str(e)}

IMAGE_PATH = "Noodles.jpg"  
SPOONACULAR_API_KEY = "5950424121ce4fa4858fb4fdbebf6694"  

detected_food = detectFood(IMAGE_PATH)

if detected_food:
    nutrition_info = get_nutrition_info(detected_food, SPOONACULAR_API_KEY)

    # Save nutrition data to JSON
    with open("nutrition_info.json", "w") as json_file:
        json.dump(nutrition_info, json_file, indent=4)

    #print("\nNutrition Data for:", detected_food)

     # extract nutrition data from json file
    calories = nutrition_info.get("calories", {}).get("value", "N/A")
    calories_unit = nutrition_info.get("calories", {}).get("unit", "")

    carbs = nutrition_info.get("carbs", {}).get("value", "N/A")
    carbs_unit = nutrition_info.get("carbs", {}).get("unit", "")

    fat = nutrition_info.get("fat", {}).get("value", "N/A")
    fat_unit = nutrition_info.get("fat", {}).get("unit", "")

    protein = nutrition_info.get("protein", {}).get("value", "N/A")
    protein_unit = nutrition_info.get("protein", {}).get("unit", "")

    print(f"Calories: {calories} {calories_unit}")
    print(f"Carbohydrates: {carbs} {carbs_unit}")
    print(f"Fat: {fat} {fat_unit}")
    print(f"Protein: {protein} {protein_unit}")

    #print(" Nutrition data saved to nutrition_info.json")
else:
    print("Failed to detect food in the image.")