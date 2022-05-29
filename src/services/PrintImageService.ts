const widthA4cm = 18.5 as number;
//const heightA4 = 3508;
const heightA4cm = 27.7 as number;

class PrintImageService {
    qnt: number;
    image: any;
    elem: any;

    constructor(elem: any, image: any, qnt: number) {
        this.qnt = qnt;
        this.image = image;
        this.elem = elem;
    }
    
    isWhatPercentOf(numA: number, numB:number) : number 
    {
        return (numA / numB);
    }

    pixelToCm(pixels: number): number
    {
        return pixels * 0.0264583333;
    }

    cmToPixel(cm: number): number
    {
        return cm * 37.7952755906;
    }

    roundNumber(num: number): number
    {
        return parseInt(num.toString());
    }

    newWidth(): number
    {
        return this.cmToPixel(widthA4cm) / this.qnt;
    }

    newHeight(): number
    {
        return this.image.height * this.isWhatPercentOf(
            this.newWidth(), 
            this.image.width
        );
    }

    totalImages(): number
    {
        return this.qnt * this.roundNumber(
                this.cmToPixel(heightA4cm) / this.newHeight()
            )
    }

    imageTag(): string
    {
        return '<img src="' + this.image.src + '" style="width: ' + this.pixelToCm(this.newWidth()) + 'cm; height: ' + this.pixelToCm(this.newHeight()) + 'cm" />';
    }

    isValid(): boolean
    {
        return this.qnt && this.elem && this.image; 
    }
    
    printElem(): void 
    {
        if (! this.isValid()) {
            return;
        }

        for(let i = 0; i < this.totalImages(); i++) {
            this.elem.innerHTML += this.imageTag();
        }
        
        const mywindow = window.open('', 'PRINT', '');

        mywindow!.document!.write('<html><head><title>' + document.title  + '</title>');

        mywindow!.document!.write('</head><body >');
        mywindow!.document!.write(this.elem.innerHTML);
        mywindow!.document!.write('</body></html>');

        mywindow!.document!.close(); // necessary for IE >= 10
        mywindow!.focus(); // necessary for IE >= 10*/

        mywindow!.onload = () => {
            mywindow!.print();
            mywindow!.close();
        }

        mywindow!.addEventListener('beforeunload', () => {
            
            this.elem.innerHTML = '';
        });

    }
}

module.exports = PrintImageService;