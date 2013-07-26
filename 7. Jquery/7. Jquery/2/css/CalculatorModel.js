function CalculatorModel() {

        this.getAjax = function() {
                return (XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject();
        };

        this.useAjaxToSolve = function(method, uri, operand1, operand2, func) {
                var   xhr = this.getAjax(),
                        response;

                xhr.onreadystatechange = function() {

                        if (xhr.readyState === 4 && xhr.status === 200) {
                                response = xhr.responseText;
                                func(response);
                        }

                };
                xhr.open(method, uri + "?operand1=" + operand1 + "&operand2=" + operand2, true);
                xhr.send();
        };


        return this;
}