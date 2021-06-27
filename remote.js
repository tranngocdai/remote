class Control{
    constructor(code) {
        this.code=code;
    }
    conect(tivi){
        this.control=tivi;
    }
    turnonoff(){
        if (this.code==this.control.code) {
            this.control.turnonoff();
        }
    }
    chanelUp(){
        if (this.code==this.control.code){
            this.control.nextchanelUp();
        }
    }
    chanelDown() {
        if (this.code == this.control.code) {
            this.control.nextchanelDown();
        }
    }
    upVolume() {
        if (this.code == this.control.code) {
            this.control.volumeUp();
        }
    }
    downVolume() {
        if (this.code == this.control.code) {
            this.control.volumeDown();
        }
    }
}