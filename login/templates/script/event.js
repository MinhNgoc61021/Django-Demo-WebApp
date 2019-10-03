document.getElementById('Name').focus();
window.onload = function(){
	var name = document.getElementById('Name');
	var address = document.getElementById('Address');
	var male = document.getElementById('Male');
	var female = document.getElementById('Female');
	var birthdate = document.getElementById('Birthdate');
	var email = document.getElementById('E-mail');
	var phonenumber = document.getElementById('Phone-number');
	var english = document.getElementById('English');
	var quantri = document.getElementById('Quantri');
	var IT = document.getElementById('IT');
	var username = document.getElementById('Username');
	var password = document.getElementById('Password');
	var reconfirmpassword = document.getElementById('Re-confirm-Password');
	var note = document.getElementById('Note');
	var cf_button = document.getElementById('Confirm');	

	name.onblur = function() {
		document.getElementById('Name').value = Valuate_Name(name.value);
	}

	birthdate.onblur = function() {
		Valuate_Birthdate(birthdate.value.toString());
	}

	name.onkeyup = function(argument) {
		nextKey(argument, address);
	}

	address.onkeyup = function(argument) {
		nextKey(argument, male);
	}

	male.onkeyup = function(argument) {
		nextKey(argument, female);
	}

	female.onkeyup = function(argument) {
		nextKey(argument, birthdate);
	}

	birthdate.onkeyup = function(argument) {
		nextKey(argument, email)
	}
	
	email.onkeyup = function(argument) {
		nextKey(argument, phonenumber);
	}

	email.onblur = function(argument) {

	}

	phonenumber.onkeyup = function(argument) {
		nextKey(argument, english)
	}

	english.onkeyup = function(argument) {
		nextKey(argument, quantri)
	}

	quantri.onkeyup = function(argument) {
		nextKey(argument, IT)
	}

	IT.onkeyup = function(argument) {
		nextKey(argument, username)
	}

	username.onkeyup = function(argument) {
		nextKey(argument, password)
	}

	password.onkeyup = function(argument) {
		nextKey(argument, reconfirmpassword)
	}

	reconfirmpassword.onkeyup = function(argument) {
		nextKey(argument, note)
	}

	cf_button.onclick = function(argument) {
		Confirm();
	}

	function nextKey(event, next_target) {
		
		if (event.keyCode === 13) {
			if (window.event) {
			 	e = window.event; 
			}
			next_target.focus();
		}
	}

	function Valuate_Name(name_value) {

		let name_value_trim = name_value.trim();

		let name_array = name_value_trim.split(' ');
		let result = '';
		for (var i = 0; i < name_array.length; i++) {
			if (name_array.length == 1) {
				let first_char = name_value_trim.substr(0, 1);
				let second_char = name_value_trim.substr(1, name_value_trim.length - 1);
				result = first_char.toUpperCase() + second_char.toLowerCase();
			}

			else {
				let first_char = name_array[i].substr(0, 1);
				let second_char = name_array[i].substr(1, name_value_trim.length - 1);
				valuate_namearray = first_char.toUpperCase() + second_char.toLowerCase() + ' ';
				result += valuate_namearray;
				console. log(result);
			}
		}

		return result;
	}

	function Valuate_Email(bir) {

	}
	function Valuate_Birthdate(birthdate_value) {
		if (birthdate_value === '') {
			document.getElementById('Birthdate_error').style.display = 'none';
		}
		if (birthdate_value != '') {
			if (birthdate_value.includes('/') === true) {
				let date_array = birthdate_value.split('/');
				let d = parseInt(date_array[0]);
				let m = parseInt(date_array[1]);
				let y = date_array[2];

				console.log(d + ' ' + m + ' ' + y.toString().length);
				if (d > 0 && y.toString().length === 4 && m <= 12) {
					if (m === 4 || m === 6 || m === 9 || m === 10 || m === 11) {
						if (d >= 31) {
							document.getElementById('Birthdate_error').innerHTML = 'Bạn nhập lại ngày sinh.';
							document.getElementById('Birthdate_error').style.display = 'inline';
						}
						else {
							document.getElementById('Birthdate_error').style.display = 'none';
						}
					}	
					else if (m.value === 2) {
						if (d <= 29 || d <= 28) {
							document.getElementById('Birthdate_error').style.display = 'none';
						}
						else {
							document.getElementById('Birthdate_error').innerHTML = 'Bạn nhập lại ngày sinh.';
							document.getElementById('Birthdate_error').style.display = 'inline';
						}
					}
					else {
						if (d > 30) {
							document.getElementById('Birthdate_error').innerHTML = 'Bạn nhập lại ngày sinh.';
							document.getElementById('Birthdate_error').style.display = 'inline';
						}
						else {
							document.getElementById('Birthdate_error').style.display = 'none';
						}
					}
				}
				
				else {
					document.getElementById('Birthdate_error').innerHTML = 'Bạn nhập lại ngày sinh.';
					document.getElementById('Birthdate_error').style.display = 'inline';
				}

			}
		
			else {
				let d = parseInt(birthdate_value.substr(0, 2));
				let m = parseInt(birthdate_value.substr(2, 2));
				let y = birthdate_value.substr(4, birthdate_value.length - 4);

				console.log(d + ' ' + m + ' ' + y);

				if (d > 0 && y.toString().length === 4 && m <= 12) {
					if (m === 4 || m === 6 || m === 9 || m === 10 || m === 11) {
						if (d === 31) {
							document.getElementById('Birthdate_error').innerHTML = 'Bạn nhập lại ngày sinh.';
							document.getElementById('Birthdate_error').style.display = 'inline';
						}
						else {
							document.getElementById('Birthdate').value = d + '/' + m + '/' + y;
							document.getElementById('Birthdate_error').style.display = 'none';
						}
					}	
					else if (m === 2) {
						if (d <= 29 || d <= 28) {
							document.getElementById('Birthdate').value = d + '/' + m + '/' + y;
							document.getElementById('Birthdate_error').style.display = 'none';
						}
						else {
							document.getElementById('Birthdate_error').innerHTML = 'Bạn nhập lại ngày sinh.';
							document.getElementById('Birthdate_error').style.display = 'inline';
						}
					}
					else {
						if (d > 31) {
							document.getElementById('Birthdate_error').innerHTML = 'Bạn nhập lại ngày sinh.';
							document.getElementById('Birthdate_error').style.display = 'inline';
						}
						else {
							document.getElementById('Birthdate').value = d + '/' + m + '/' + y;
							document.getElementById('Birthdate_error').style.display = 'none';
						}
					}
				}
				
				else {
					document.getElementById('Birthdate_error').innerHTML = 'Bạn nhập lại ngày sinh.';
					document.getElementById('Birthdate_error').style.display = 'inline';
				}
			}
		}
		
	}

	function Confirm() {
		if (name.value === '') {
			document.getElementById('Name_error').innerHTML = 'Quý vị chưa nhập tên.';
			document.getElementById('Name_error').style.display = 'inline';
		}

		else if (name.value !== '') {
			document.getElementById('Name_error').style.display = 'none';
		}

		if (birthdate.value === '') {
			document.getElementById('Birthdate_error').innerHTML = 'Quý vị chưa nhập ngày sinh.';
			document.getElementById('Birthdate_error').style.display = 'inline';
		}

		else if (birthdate.value !== '') {
			document.getElementById('Birthdate_error').style.display = 'none';
		}

		if (email.value === '') {
			document.getElementById('E-mail_error').innerHTML = 'Quý vị chưa nhập email.';
			document.getElementById('E-mail_error').style.display = 'inline';
		}

		else if (email.value !== '') {
			document.getElementById('E-mail_error').style.display = 'none';
		}	

		if (username.value === '') {
			document.getElementById('Username_error').innerHTML = 'Quý vị chưa nhập tên người dùng.';
			document.getElementById('Username_error').style.display = 'inline';
		}

		else if (username.value !== '') {
			document.getElementById('Username_error').style.display = 'none';
		}	

		if (password === '') {
			document.getElementById('Password_error').innerHTML = 'Quý vị chưa nhập mật khẩu.';
			document.getElementById('Password_error').style.display = 'inline';
		}

		else if (password !== '') {

			if (password !== reconfirmpassword) {
				document.getElementById('Password_error').innerHTML = 'Mật khẩu và mật khẩu gõ lại không trùng nhau.';
				document.getElementById('Password_error').style.display = 'inline';
			}

			else {
				document.getElementById('Password_error').innerHTML = '';
				document.getElementById('Password_error').style.display = 'none';
			}
			
		}	

		if (reconfirmpassword === '') {
			document.getElementById('Re-confirm-Password_error').innerHTML = 'Quý vị hãy nhập lại mật khẩu.';
			document.getElementById('Re-confirm-Password_error').style.display = 'inline';
		}

		else if (reconfirmpassword !== '') {
			document.getElementById('Re-confirm-Password_error').style.display = 'none';
		}
	}
};