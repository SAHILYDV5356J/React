function customRender(reactelement,mainContainer){

    /*
    const domelement= document.createElement(reactelement.type);

    domelement.innerHTML= reactelement.children;
    domelement.setAttribute("href", reactelement.props.href);
    domelement.setAttribute("target",reactelement.props.target);

    mainContainer.appendChild(domelement);

    */


    const domelement=document.createElement(reactelement.type);
    domelement.innerHTML=reactelement.children;

    for( const prop in reactelement.props){
        if(prop==='children') continue;

        domelement.setAttribute(prop,reactelement.props[prop])
    }

    mainContainer.appendChild(domelement);
}

const reactelement= {
    type:'a',
    props:{
        href:'https://google.com',         //react convert in this type
        target:'_blank'
    },

    children: 'click me to visit google'
}

const mainContainer= document.getElementById("root")

customRender(reactelement,mainContainer)