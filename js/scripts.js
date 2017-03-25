var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();
var textCharsAfter = text.replace('Papugi', animalUpperCased);
var textHalf = textCharsAfter.length/2;
var textCharsAfterHalf = textCharsAfter.substr(0, textHalf);

console.log(textCharsAfterHalf);
