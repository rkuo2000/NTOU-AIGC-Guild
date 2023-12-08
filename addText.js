class creEle{
    constructor(tag = "div"){
        this.el = document.createElement(tag);
    }
    setText(context = ''){
        const textNode = document.createTextNode(context);
        if (context === "") {
          this.el.innerText = "";
          return;
        }
        this.el.append(textNode);
    }
    setAttribute(attribute = {}){
        if (typeof attribute !== "object") return;
        for (let attr in attribute) {
            if(attr === 'style'){
              this.el.style.cssText += attribute[attr];
            }else{
              this.el.setAttribute(attr, attribute[attr]);
            }
        }
    }
}



const h1 = new creEle('h1');
h1.setText('我在生成式AI冒險者公會等你，來跟我一起進化吧~');
document.querySelector("body").appendChild(h1.el)
