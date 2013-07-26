function CalculatorController() {
        var model = new CalculatorModel(),
                values = {},
                elements = {},
                input_state = true,
                input,
                len, i;

        function getValues() {
                values.first =parseInt(elements.first_input.value, 10);
                values.second = parseInt(elements.second_input.value, 10)

                return  values;
        }

        function getCurrentInput() {
                input = (input_state) ? elements.first_input : elements.second_input;
                return input;
        }

        function addDigit(number) {
                input.value += number;
        }

        function clearLastInputValue() {
                var input_len = input.value.length;
                input.value = input.value.slice(0, input_len - 1);
        }

        function clearInputValue() {
                input.value = '';
        }

        function insertResult(result) {
                elements.result_input.value = result;
        }

        this.init = function() {

                elements = {
                        first_input: document.querySelector('#first-number'),
                        second_input: document.querySelector('#second-number'),
                        result_input: document.querySelector('#result'),
                        num_keys: document.querySelectorAll('#num-keys span'),
                        clear_last_num_node: document.querySelector('#clear-number'),
                        delete_num_node: document.querySelector('#delete-number'),
                        summ_node: document.querySelector('#summ'),
                        minus_node: document.querySelector('#minus'),
                        multiply_node: document.querySelector('#multiply'),
                        devide_node: document.querySelector('#devide')
                };

                len = elements.num_keys.length - 1;

                for (i = 0; i <= len; i++) {
                        elements.num_keys[i].onclick = function(number) {
                                return function() {
                                        getCurrentInput();
                                        addDigit(number);
                                };
                        }(len - i);
                }

                elements.first_input.onclick = function() {
                        input_state = true;
                };

                elements.second_input.onclick = function() {
                        input_state = false;
                };

                elements.clear_last_num_node.onclick = function() {
                        getCurrentInput();
                        clearLastInputValue();
                };

                elements.delete_num_node.onclick = function() {
                        getCurrentInput();
                        clearInputValue();
                };

                elements.summ_node.onclick = function() {
                        getValues();
                        model.solveExpression('add', values, insertResult);
                };

                elements.minus_node.onclick = function() {
                        getValues();
                        model.solveExpression('sub', values, insertResult);
                };

                elements.multiply_node.onclick = function() {
                        getValues();
                        model.solveExpression('mul', values, insertResult);
                };

                elements.devide_node.onclick = function() {
                        getValues();
                        model.solveExpression('div', values, insertResult);
                };
        };

        return this;
}



//Array.prototype.forEach.call( elements.num_keys, function(elem, index) { elem.onclick = function() {getRightInput(); addDigit(len-index)}});