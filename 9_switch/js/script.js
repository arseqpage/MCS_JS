console.log('You are at ' + window.location);

let answer = prompt('Введите имя музыканта');
answer = answer.toLowerCase();
console.log(answer);

switch (answer) {
	case 'dr. dre':
		console.log('rap');
		break;
	case 'jimmy hendrix':
		console.log('rock');
		break;
	case 'Britney spears':
		console.log('Pop');
		break;
	default: console.log('No such singer in database');
		break;
}