window.onload=function(){
    var data = {
        "url": [
            "img-1.jpg",
            "img-2.jpg",
            "img-3.jpg",
            "img-4.jpg",
            "img-5.jpg",
            "img-6.jpg",
            "img-7.jpg",
            "img-8.jpg",
            "img-9.jpg",
            "img-10.jpg",
            "img-11.jpg",
            "img-12.jpg",
            "img-13.jpg",
            "img-14.jpg",
            "img-15.jpg",
            "img-1.jpg",
            "img-2.jpg",
            "img-3.jpg",
            "img-4.jpg",
            "img-5.jpg",
            "img-6.jpg",
            "img-7.jpg",
            "img-8.jpg",
            "img-9.jpg",
            "img-10.jpg",
            "img-11.jpg",
            "img-12.jpg",
            "img-13.jpg",
            "img-14.jpg",
            "img-15.jpg",
        ]
    };

    var oBox = document.getElementById('box'),
        frag = document.createDocumentFragment(),
        row = oBox.getAttribute('row'),
        firstLoad = 2 * row;
    for(var index = 0; index < row; index++){
        var colum = document.createElement("div");
        colum.className = 'colum';
        frag.appendChild(colum)
    }

    for(var index = 0; index < data.url.length; index ++){
        var oItem = document.createElement('div');
        if(index < row){
            oItem.className = "item";
            var img = document.createElement('img');
            img.className = "test";
            img.src = `./image/${data.url[index]}`;
            oItem.appendChild(img)
            frag.children[index].appendChild(oItem)
        }
        if(index < firstLoad && index >= row){
            oItem.className = "item";
            var img = document.createElement('img');
            img.className = "test";
            img.src = `./image/${data.url[index]}`;
            oItem.appendChild(img)
            frag.children[index - parseInt(index / row) * row].appendChild(oItem) 
        }
        if(index >= firstLoad){
            oItem.className = "item";
            var img = document.createElement('img');
            img.className = "test";
            img.src = '';
            oItem.appendChild(img)
            frag.children[index - parseInt(index / row) * row].appendChild(oItem)
        }
        
    }
    window.onscroll = function(){
        var oImg = document.getElementsByTagName('img');
        for(var i = 0; i < oImg.length; i ++){
            if(oImg[i].getBoundingClientRect().top < document.documentElement.clientHeight){
                oImg[i].src = `./image/${data.url[i]}`
            }
        }
    };
    










    oBox.appendChild(frag)
    
}