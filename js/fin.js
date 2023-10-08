
    let noteId = 1; // To assign unique IDs to each note

    function checkEnter(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addNote();
        }
    }

    function addNote() {
        let inp1 = document.getElementById('inp1').value;
        let noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.innerHTML = `
            <h4>${inp1}</h4>
            <table class="table" width="300px">
                <tr>
                    <td>
                        <input type="text" id="inp2-${noteId}" class="input2" onkeydown="checkEnterContent(event, ${noteId})">
                    </td>
                </tr>
            </table>
        `;
        document.querySelector('.container').appendChild(noteDiv);
        document.getElementById('inp1').value = "";
        noteId++;
    }

    function checkEnterContent(event, id) {
        if (event.key === "Enter") {
            event.preventDefault();
            addContent(id);
        }
    }

        function addContent(id) {
            let inp2 = document.getElementById(`inp2-${id}`).value;
            let table = document.querySelector(`#inp2-${id}`).closest('.note').querySelector('.table');
            let row = document.createElement('tr');
            row.innerHTML = `
            <tr>  <td>${inp2}</td> </tr>
            `;
            table.appendChild(row);
            document.getElementById(`inp2-${id}`).value = "";
        }

