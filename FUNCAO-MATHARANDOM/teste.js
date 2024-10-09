function numaleatorio()
{
	let randomNumber = Math.floor(Math.random() * 10 + 1);
	return randomNumber;
}
console.log(numaleatorio());

//Neste caso Actualizamos el código de la función para hacer que devuelva un número entero (no decimales) entre 1 y 10.
/*
- Math.random() solo devuelve números decimales del 0 al 1, y nosotros necesitamos números enteros del 1 al 10.
- Multiplica la función Math.random() por 10 para mover el decimal un espacio a la derecha.
- Usa la función Math.floor() para eliminar el resto de los decimales y tener solo los enteros.
*/