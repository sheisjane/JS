let todos = [ 'learn code','cook dinner','read books'];

while(true) {
    let command = prompt('Please input a command ');
    console.log(command);
    
    if (command === 'exit'){
        break;
    } else if (command === 'list') {
       
        for (let todo of todos) {
            console.log (todo);
    }
}
}
