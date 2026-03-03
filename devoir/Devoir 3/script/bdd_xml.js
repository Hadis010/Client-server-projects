let xmlhttp = new XMLHttpRequest();

function fetchData() {
    let xmlDoc = xmlhttp.responseXML;
    let table = "<tr><th>Book</th><th>Authors</th></tr>";
    let x = xmlDoc.getElementsByTagName("BOOK");
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("AUTHOR")[0].childNodes[0].nodeValue +
            "</td>" +
            "<td><button type=\"button\" onclick=\"editBook(" +
            x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
            "Edit</button></td>" +
            "<td><button type=\"button\" onclick=\"deleteBook(" +
            x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue + ")\">" +
            "Delete</button></td>" +
            "</tr>";

    }
    document.getElementById("data").innerHTML = table;
}

function editBook(id) {
    let tblBook = document.getElementById("tblBook");
    let txtTitle = document.getElementById("txtTitle");
    let txtAuthor = document.getElementById("txtAuthor");
    let hId = document.getElementById("hId");
    let btnAdd = document.getElementById("btnAdd");
    let btnUpdate = document.getElementById("btnUpdate");
    btnUpdate.style.display = "";
    btnAdd.style.display = "none";


    let xmlDoc = xmlhttp.responseXML;
    let books = xmlDoc.getElementsByTagName("BOOK");
    let book;

    for (let i = 0; i < books.length; i++) {
        if (books[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            book = books[i];
        }
    }

    tblBook.style.display = "block";
    hId.value = book.getElementsByTagName("ID")[0].childNodes[0].nodeValue;
    txtTitle.value = book.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
    txtAuthor.value = book.getElementsByTagName("AUTHOR")[0].childNodes[0].nodeValue;
}

function updateBook() {
    let xmlDoc = xmlhttp.responseXML;
    let id = document.getElementById("hId").value;
    let books = xmlDoc.getElementsByTagName("BOOK");
    let book;

    for (let i = 0; i < books.length; i++) {
        if (books[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            book = books[i];
        }
    }

    let txtTitle = document.getElementById("txtTitle");
    let txtAuthor = document.getElementById("txtAuthor");

    book.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue = txtTitle.value;
    book.getElementsByTagName("AUTHOR")[0].childNodes[0].nodeValue = txtAuthor.value;

    fetchData();
}

function deleteBook(id) {
    let xmlDoc = xmlhttp.responseXML;
    let books = xmlDoc.getElementsByTagName("BOOK");
    let book;

    for (let i = 0; i < books.length; i++) {
        if (books[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue == id) {
            book = books[i];
        }
    }

    xmlDoc.documentElement.removeChild(book);
    fetchData();
}

function makeTextFile(text) {
    let textFile = null;
    let data = new Blob([text], {type: 'text/plain'});

    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
};

function saveBook() {
    //let create = document.getElementById('btnSave');

    let link = document.createElement('a');
    link.setAttribute('download', 'dwc_bdd.xml');

    const s = new XMLSerializer();

    link.href = makeTextFile(s.serializeToString(xmlhttp.responseXML));
    document.body.appendChild(link);

    window.requestAnimationFrame(function () {
        let event = new MouseEvent('click');
        link.dispatchEvent(event);
        document.body.removeChild(link);
    });
}

function addBook() {
    let tblBook = document.getElementById("tblBook");
    let btnUpdate = document.getElementById("btnUpdate");
    let btnAdd = document.getElementById("btnAdd");

    tblBook.style.display = "block";
    btnUpdate.style.display = "none";
    btnAdd.style.display = "";
    clearInputForm();
}

function clearInputForm() {
    let txtTitle = document.getElementById("txtTitle");
    let txtAuthor = document.getElementById("txtAuthor");
    let hId = document.getElementById("hId");

    txtTitle.value = "";
    txtAuthor.value = "";
    hId.value = "";
}

function submitBook() {
    let txtTitle = document.getElementById("txtTitle");
    let txtAuthor = document.getElementById("txtAuthor");

    if (txtTitle.value !== undefined && txtAuthor.value !== undefined) {
        let xmlDoc = xmlhttp.responseXML;
        let books = xmlDoc.getElementsByTagName("BOOK");
        let id = 1;

        if (books.length !== 0) {
            id += Number(books[books.length - 1].getElementsByTagName('ID')[0].childNodes[0].nodeValue);
        }


        let bookNode = xmlDoc.createElement("BOOK");
        let titleNode = xmlDoc.createElement("TITLE");
        let authorNode = xmlDoc.createElement("AUTHOR");
        let idNode = xmlDoc.createElement("ID");

        let nodeTitle =  document.createTextNode(txtTitle.value)
        titleNode.appendChild(nodeTitle);

        let nodeAuthor = document.createTextNode(txtAuthor.value)
        authorNode.appendChild(nodeAuthor);

        let nodeId = document.createTextNode(id.toString())
        idNode.appendChild(nodeId);

        bookNode.append(idNode);
        bookNode.append(titleNode);
        bookNode.append(authorNode);
        xmlDoc.documentElement.append(bookNode);

        clearInputForm();
        fetchData();
    }


}

function loadXMLDoc() {
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            fetchData();
        }
    };
    xmlhttp.open("GET", "https://phobos.univ-brest.fr/media/edu/kx07kar7/book_catalog.xml", true);
    xmlhttp.send();
}
