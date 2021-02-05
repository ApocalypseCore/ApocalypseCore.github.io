new Vue ({
    el: '#work',
    data: {
        title: "Эта строчка изменится при нажатии на кнопку ниже...",
        val: '',
        result: '',
        numbers: [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '.', 0,'.0', '/'],
    },
    methods: {
        input: function (char) {
            this.result = this.result.toString();
            this.result += char;
        },
        reset: function () {
            this.result = '';
        },
        calc: function () {
            this.result = eval(this.result);
        }
    }
});