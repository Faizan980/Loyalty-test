        function remind(){
            let name = document.querySelector('#name1').value;
            switch (name){
                case 'Ali':
                case 'Usman':
                case 'Zeeshan':
                case 'Adnan':
                case 'Moaz':
                case 'Farhan':
                case 'Usman':
                case 'Rashid':
                case 'Daim':
                case 'Fahad':
                case 'Zara':
                case 'Arrow':
            document.querySelector('#result').innerHTML = `I know ${name}`;
            break;
            default:
            document.querySelector('#result').innerHTML = `I don't know ${name}`;
            }
        }