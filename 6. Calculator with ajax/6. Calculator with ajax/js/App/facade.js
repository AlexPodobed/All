function Facade() {

        var urls_hash = {
                'add': 'add.php',
                'div': 'div.php',
                'mul': 'mul.php',
                'sub': 'sub.php'
        };

        function getAjax() {
                return (XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject();
        }

        function buildURL(model, params) {
                var arr_of_values = [],
                        url = '/php/' + urls_hash[model] + '?',
                        key, i;

                for (key in params) {
                        arr_of_values.push(params[key]);
                }

                for (i = 0; i < arr_of_values.length; i++) {
                        url += 'operand' + (i + 1) + '=' + arr_of_values[i] + '&';
                }

                return url.slice(0, url.length - 1);
        }


        this.useAjax = function(model, params, callback) {
                var ajax = getAjax();

                ajax.onreadystatechange = function() {

                        if (ajax.readyState === 4 && ajax.status === 200) {
                                callback(ajax.responseText);
                        }

                };
                ajax.open("GET", buildURL(model, params), true);
                ajax.send();
        };

        return this;
}