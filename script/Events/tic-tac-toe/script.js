var cnt=1;
		function game(e) {
			
			if(cnt%2==0)
			{
				document.getElementById(e).value='X';
				document.getElementById(e).disabled=true;
			}
			else
			{
				document.getElementById(e).value='O';
				document.getElementById(e).disabled=true;
			}
			cnt++;
			
			var b1=document.getElementById('b1').value;
			var b2=document.getElementById('b2').value;
			var b3=document.getElementById('b3').value;
			var b4=document.getElementById('b4').value;
			var b5=document.getElementById('b5').value;
			var b6=document.getElementById('b6').value;
			var b7=document.getElementById('b7').value;
			var b8=document.getElementById('b8').value;
			var b9=document.getElementById('b9').value;

			if(b1 == "X" && b2 == "X" && b3 == "X" || b4 == "X" && b5 == "X" && b6 == "X" || b7 == "X" && b8 == "X" && b9 == "X" || b1 == "X" && b4 == "X" && b7 == "X" || b2 == "X" && b5 == "X" && b8 == "X" || b3 == "X" && b6 == "X" && b9 == "X" || b1 == "X" && b5 == "X" && b9 == "X" || b7 == "X" && b5 == "X" && b3 == "X"){

				document.getElementById('result').innerHTML=" Ans : X is Winner";

				document.getElementById('b1').disabled=true;
				document.getElementById('b2').disabled=true;
				document.getElementById('b3').disabled=true;
				document.getElementById('b4').disabled=true;
				document.getElementById('b5').disabled=true;
				document.getElementById('b6').disabled=true;
				document.getElementById('b7').disabled=true;
				document.getElementById('b8').disabled=true;
				document.getElementById('b9').disabled=true;

			}
			if(b1 == "O" && b2 == "O" && b3 == "O" || b4 == "O" && b5 == "O" && b6 == "O" || b7 == "O" && b8 == "O" && b9 == "O" || b1 == "O" && b4 == "O" && b7 == "O" || b2 == "O" && b5 == "O" && b8 == "O" || b3 == "O" && b6 == "O" && b9 == "O" || b1 == "O" && b5 == "O" && b9 == "O" || b7 == "O" && b5 == "O" && b3 == "O")
			{
				// alert('O is Win');
				document.getElementById('result').innerHTML=" Ans : O is Winner";

				document.getElementById('b1').disabled=true;
				document.getElementById('b2').disabled=true;
				document.getElementById('b3').disabled=true;
				document.getElementById('b4').disabled=true;
				document.getElementById('b5').disabled=true;
				document.getElementById('b6').disabled=true;
				document.getElementById('b7').disabled=true;
				document.getElementById('b8').disabled=true;
				document.getElementById('b9').disabled=true;

			}

		}
		function res() {
			document.getElementById('b1').value="";
			document.getElementById('b2').value="";
			document.getElementById('b3').value="";
			document.getElementById('b4').value="";
			document.getElementById('b5').value="";
			document.getElementById('b6').value="";
			document.getElementById('b7').value="";
			document.getElementById('b8').value="";
			document.getElementById('b9').value="";

			document.getElementById('b1').disabled=false;
			document.getElementById('b2').disabled=false;
			document.getElementById('b3').disabled=false;
			document.getElementById('b4').disabled=false;
			document.getElementById('b5').disabled=false;
			document.getElementById('b6').disabled=false;
			document.getElementById('b7').disabled=false;
			document.getElementById('b8').disabled=false;
			document.getElementById('b9').disabled=false;	

			document.getElementById('result').innerHTML=" Ans :";

		}