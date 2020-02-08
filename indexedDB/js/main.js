(function() {
  if (!window.indexedDB) {
    console.log("INDEXED DB not supported");
    return;
  }

  const customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
  ];

  var db_two;

  const DBNAME = "MyTestDataBase";
  const DBNAME_2 = "MyTestDataBase_2";
  // creation d'une instance IDBDatabase
  var request = window.indexedDB.open(DBNAME, 2);
  var request_two = window.indexedDB.open(DBNAME_2, 2);

  // evement a erreur
  // ajout d'un gestionnaire d'erreur a la databasel

  request.onerror = function(event) {
    console.log("pb pb", event);
  };

  // evenement a success
  request.onsuccess = function(event) {
    // db = event.target.result; //save IDBDatabase instance
  };

  request.onupgradeneeded = function(event) {
    var db = event.target.result;

    //creation d'un object de stockage

    var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

    objectStore.createIndex("name", "name", { unique: false });

    objectStore.createIndex("email", "email", { unique: true });

    // objectStore transaction error
    objectStore.transaction.onerror = function(event) {};
    //objectStore transaction complete
    objectStore.transaction.oncomplete = function(event) {
      var customerObjectStore = db
        .transaction("customers", "readwrite")
        .objectStore("customers");
      for (var i in customerData) {
        var keyCustomer = customerObjectStore.add(customerData[i]);
        keyCustomer.onsuccess = function(event) {
          console.log(event.target.result);
        };
      }
    };
  };

  request_two.onupgradeneeded = function(event) {
    db_two = event.target.result;

    var objectStore_2 = db_two.createObjectStore("names", {
      autoIncrement: true
    });

    objectStore_2.transaction.oncomplete = function(event) {
      customerdata = db_two
        .transaction("names", "readwrite")
        .objectStore("names");
      for (var i in customerData) {
        customerdata.add(customerData[i].name);
      }
    };
  };
})();
