let game = new Vue({
    el: '#game',
    data: {
        nbtn: 'Начать играть',
        round: 0,
        record: 0,
        levelMS: 1000,
        arrRes: [],
        arrClick: [],
        counter: 0,
        hiddensLose: false,
        tempRound: 0,
        audio: 'audio'
    },
    methods: {
        btnClick: function() {
            if (this.nbtn === 'Начать играть') {
                    this.round += 1,
                    this.nbtn = 'Стоп',
                    this.startGame(),
                    this.hiddensLose = false
            } else {
                    clearInterval(clear),
                    this.tempRound = this.round - 1,
                    this.round = 0,
                    this.counter = 0,
                    this.arrClick.splice(0, this.arrClick.length),
                    this.arrRes.splice(0, this.arrRes.length),
                    this.nbtn = 'Начать играть',
                    this.hiddensLose = true
                    if (this.audio !== 'audio') {
                            this.audio.pause()  
                    }
                    for(let elem of arrLamp) {
                        elem.style.pointerEvents = 'none'
                    }
            }
        },
        addArr: function(elem) {
            if (this.round > 0) {
                this.arrClick.push(elem);
                if (this.arrClick[this.counter] == this.arrRes[this.counter]) {
                    if (this.arrClick.length === this.arrRes.length) {
                        if (this.round > this.record) {
                            this.record += 1
                        }
                        this.arrClick.splice(0, this.arrClick.length),
                        this.arrRes.splice(0, this.arrRes.length),
                        this.counter = 0,
                        this.round += 1
                        for(let elem of arrLamp) {
                            elem.style.pointerEvents = 'none'
                        }
                        this.startGame()
                    } else {
                        this.counter += 1
                    }
                } else {
                        this.arrClick.splice(0, this.arrClick.length),
                        this.arrRes.splice(0, this.arrRes.length),
                        this.counter = 0,
                        this.tempRound = this.round - 1,
                        this.round = 0,
                        this.hiddensLose = true,
                        this.audio.pause(),
                        clearInterval(clear),
                        this.nbtn = 'Начать играть'
                        for(let elem of arrLamp) {
                            elem.style.pointerEvents = 'none'
                        }
                }
            }

        },
        startGame: function() {
            arrLamp = document.querySelectorAll('.but'),
                temp = this.arrRes,
                tempLevelMS = this.levelMS,
                tempRound = this.round,
                tempSound = this.soundClick,
                clear = setInterval(function() { 
                    if (temp.length <= tempRound) {
                            random = Math.floor(Math.random() * arrLamp.length),
                            temp.push(arrLamp[random]),
                            tempSound(random + 1),
                            arrLamp[random].style.backgroundColor = 'rgba(127, 255, 212, 0.5)',
                            setTimeout(function() {
                                arrLamp[random].style.backgroundColor = 'rgba(127, 255, 212, 1)'
                            }, tempLevelMS)
                    } else {
                            clearInterval(clear)
                            for(let elem of arrLamp) {
                                elem.style.pointerEvents = 'auto'
                            }
                    }
                }, 2000)
        },
        levelСhange: function() {
            if (event.target.value == 1) {
                this.levelMS = 1500
            } else if (event.target.value == 2) {
                this.levelMS = 1000
            } else if (event.target.value == 3) {
                this.levelMS = 400
            }
        },
        soundClick: function(elem) {
            var audio = new Audio();
            this.audio = audio;
            audio.preload = 'auto';
            audio.src = `sounds/${elem}.mp3`;
            audio.play();
        }
    }
})