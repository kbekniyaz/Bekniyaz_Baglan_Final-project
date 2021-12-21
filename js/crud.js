//CRUD


class User {
    constructor(name, email, password ) {
      
      this.name = name;
      this.email = email;
      this.password = password;
      
      
    }
  }
  
  
  class UI {
    static displayUser() {
      const users = Store.getUser();
  
      users.forEach((user) => UI.addUserToList(user));
    }
  
    static addUserToList(user) {
      const list = document.querySelector('#user-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        
        <td><a href="#" class="delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deleteFilm(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.main__container');
      const form = document.querySelector('#form_signup');
      container.insertBefore(div, form);
  
      
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.querySelector('#username').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('#password').value = '';
      
    }
  }
  
  class Store {
    static getUser() {
      let users;
      if(localStorage.getItem('users') === null) {
        users = [];
      } else {
        users = JSON.parse(localStorage.getItem('users'));
      }
  
      return users;
    }
  
    static addUser(user) {
      const users = Store.getUser();
      uers.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
  
    static removeUser(isbn) {
      const users = Store.getUser();
  
      users.forEach((user, index) => {
        if(user.isbn === isbn) {
          users.splice(index, 1);
        }
      });
  
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', UI.displayUser);
  
  
  document.querySelector('#form_signup').addEventListener('submit', (e) => {
    
    e.preventDefault();
  
    
    const name = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
   
  
   
    if(name === '' || email === '' || password === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
      
      const user = new User() (name,email,password);
  
      
      UI.addUserToList(user);
  
      
      Store.addUser(user);
  
      
      UI.showAlert('User Added', 'success');
  
      
      UI.clearFields();
    }
  });
  
  
  document.querySelector('#user-list').addEventListener('click', (e) => {
    
    UI.deleteUser(e.target);
  
    
    Store.removeUser(e.target.parentElement.previousElementSibling.textContent);
  
    
    UI.showAlert('User Removed', 'success');
  });

