function sceneToGarbage(){
    document.getElementById("homePage").setAttribute("visible","false")
    document.getElementById("sceneGarbage").setAttribute("visible","true")
    document.getElementById("backButtonBox").setAttribute("visible","true")
}

function sceneToCoral(){
    document.getElementById("homePage").setAttribute("visible","false")
    document.getElementById("sceneCoral").setAttribute("visible","true")
    document.getElementById("backButtonBox").setAttribute("visible","true")
}

function goBack(){
    document.getElementById("homePage").setAttribute("visible","true")
    document.getElementById("sceneGarbage").setAttribute("visible","false")
    document.getElementById("sceneCoral").setAttribute("visible","false")
    document.getElementById("backButtonBox").setAttribute("visible","false")

}