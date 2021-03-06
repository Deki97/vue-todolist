// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// [x] Stampare all'interno di una lista, un item per ogni todo.
// [x] Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// [x] Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// [x] Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- [x] oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- [x] cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)


Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            newToDoText: '',
            todos: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Pagare la bolletta',
                    done: false
                },
                {
                    text: 'Andare dal parrucchiere',
                    done: true
                },
                {
                    text: 'Portare fuori il cane',
                    done: false
                },
                {
                    text: 'Ordinare la pizza',
                    done: false
                },
                {
                    text: 'Fare l\'esercizio del pomeriggio',
                    done: true
                }
            ]
        },
        methods: {
            removeToDo: function(index) {
                this.todos.splice(index, 1);
            },
            addNewToDo: function() {
                if(this.newToDoText !== ''){
                    this.todos.push(
                        {
                            text: this.newToDoText,
                            done: false
                        }
                    );
                } 
            },
            invertToDoOrDone: function(index) {
                this.todos[index].done = !this.todos[index].done;
            }
        }
    }
);
