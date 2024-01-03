import json
from flask_cors import CORS
import os
from flask import Flask, request, jsonify
from transformers import T5ForConditionalGeneration, T5Tokenizer
app = Flask(__name__)
# model_path = os.path.join(os.path.dirname(__file__), "Models")
# tokenizer_path = os.path.join(os.path.dirname(__file__), "Tokenizer")
# model = T5ForConditionalGeneration.from_pretrained(model_path)
# #print(model)
# tokenizer = T5Tokenizer.from_pretrained(tokenizer_path,legacy=False)
#         # Get JSON data from the request body
# input_ids = tokenizer(
# "English to Math Equation:A number is 72 less than its square. Find all such numbers.", return_tensors="pt"
# )
# outputs = model.generate(input_ids)
# print(outputs)
#CORS(app, resources={r"/math": {"origins": "http://localhost:5173"}, "methods": ["OPTIONS", "POST"]})
CORS(app)



@app.route('/math', methods=['POST'])
def math_solver():
    try:
        data = request.get_json()
        equation="2x+3=5"

        
        # Process the data (you can perform any operations here)

        # Send a dummy JSON response
        response_data = {'success':True,'message': 'Data received successfully', 'data': equation}
        return jsonify(response_data), 200

    except Exception as e:
        # Handle exceptions or errors
        return jsonify({'error': str(e)}), 500
    


app.run(debug=True)