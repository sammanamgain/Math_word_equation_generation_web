import json
import os
from flask import Flask, request, jsonify
from transformers import T5ForConditionalGeneration, T5Tokenizer
app = Flask(__name__)
model_path = os.path.join(os.path.dirname(__file__), "Models")
tokenizer_path = os.path.join(os.path.dirname(__file__), "Tokenizer")
model = T5ForConditionalGeneration.from_pretrained(model_path)
#print(model)
tokenizer = T5Tokenizer.from_pretrained(tokenizer_path,legacy=False)
        # Get JSON data from the request body
input_ids = tokenizer(
"English to Math Equation:A number is 72 less than its square. Find all such numbers.", return_tensors="pt"
)
outputs = model.generate(input_ids)
print(outputs)

@app.route('/math', methods=['POST'])
def math_solver():
    try:
        data = request.get_json()

        
        # Process the data (you can perform any operations here)

        # Send a dummy JSON response
        response_data = {'message': 'Data received successfully', 'data': data}
        return jsonify(response_data), 200

    except Exception as e:
        # Handle exceptions or errors
        return jsonify({'error': str(e)}), 500
    


app.run(debug=True)