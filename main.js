function startClassification() 
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vxmx7Ieo4/https://teachablemachine.withgoogle.com/models/vxmx7Ieo4/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}