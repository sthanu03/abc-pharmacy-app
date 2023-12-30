// main.go
package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

type Item struct {
	Name         string `json:"name"`
	UnitPrice    int    `json:"unitPrice"`
	ItemCategory string `json:"itemCategory"`
}

type Invoice struct {
	Name        string `json:"name"`
	MobileNo    string `json:"mobileNo"`
	Email       string `json:"email"`
	Address     string `json:"address"`
	BillingType string `json:"billingType"`
}

var items []Item
var invoices []Invoice
var db *sql.DB

func main() {
	var err error

	router := mux.NewRouter()

	// Establish a database connection
	connStr := "user=postgres dbname=abc-pharmacy sslmode=disable"
	db, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Test the database connection
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Successfully connected to the PostgreSQL database!")

	router.HandleFunc("/api/items", getItems).Methods("GET")
	router.HandleFunc("/api/items", addItem).Methods("POST")
	router.HandleFunc("/api/items/{id}", editItem).Methods("PUT")

	router.HandleFunc("/api/invoices", getInvoices).Methods("GET")
	router.HandleFunc("/api/invoices", createInvoice).Methods("POST")

	// Start the HTTP server
	http.Handle("/", router)
	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", nil)
}

func getItems(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT name, unit_price, item_category FROM items")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	var items []Item
	for rows.Next() {
		var item Item
		err := rows.Scan(&item.Name, &item.UnitPrice, &item.ItemCategory)
		if err != nil {
			log.Fatal(err)
		}
		items = append(items, item)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(items)
}

func addItem(w http.ResponseWriter, r *http.Request) {
	var newItem Item
	_ = json.NewDecoder(r.Body).Decode(&newItem)
	items = append(items, newItem)

	// Insert into the database
	_, err := db.Exec("INSERT INTO items (name, unit_price, item_category) VALUES ($1, $2, $3)", newItem.Name, newItem.UnitPrice, newItem.ItemCategory)
	if err != nil {
		log.Fatal(err)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newItem)
}

func editItem(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	itemID := params["id"]

	var updatedItem Item
	_ = json.NewDecoder(r.Body).Decode(&updatedItem)

	// Update in the database
	_, err := db.Exec("UPDATE items SET name=$1, unit_price=$2, item_category=$3 WHERE name=$4", updatedItem.Name, updatedItem.UnitPrice, updatedItem.ItemCategory, itemID)
	if err != nil {
		log.Fatal(err)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(updatedItem)
}

func getInvoices(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT name, mobile_no, email, address, billing_type FROM invoices")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	var invoices []Invoice
	for rows.Next() {
		var invoice Invoice
		err := rows.Scan(&invoice.Name, &invoice.MobileNo, &invoice.Email, &invoice.Address, &invoice.BillingType)
		if err != nil {
			log.Fatal(err)
		}
		invoices = append(invoices, invoice)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(invoices)
}

func createInvoice(w http.ResponseWriter, r *http.Request) {
	var newInvoice Invoice
	_ = json.NewDecoder(r.Body).Decode(&newInvoice)
	invoices = append(invoices, newInvoice)

	// Insert into the database
	_, err := db.Exec("INSERT INTO invoices (name, mobile_no, email, address, billing_type) VALUES ($1, $2, $3, $4, $5)", newInvoice.Name, newInvoice.MobileNo, newInvoice.Email, newInvoice.Address, newInvoice.BillingType)
	if err != nil {
		log.Fatal(err)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newInvoice)
}
