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

const aTag = document.createElement('a');
const imgTag = document.createElement('img');
aTag.setAttribute('href', 'https://www.facebook.com/groups/aigcguild.ntou');
aTag.setAttribute('target', '_blank');
imgTag.setAttribute('src', 'https://github.com/rkuo2000/NTOU-AIGC-Guild/blob/main/images/SeaArt_Tavern.png?raw=true');
aTag.appendChild(imgTag);
document.querySelector("body").appendChild(aTag);

const h1 = new creEle('h1');
h1.setText('我在生成式AI冒險者公會等你，來跟我一起進化吧~');
document.querySelector("body").appendChild(h1.el)
