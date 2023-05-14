const toggleSwitch = document.querySelector("#darkModeToggle");
toggleSwitch.addEventListener("change", switchTheme);

function switchTheme(event) {
	if (event.target.checked) {
		document.body.classList.add("dark-mode");
		document.nav.classlist.remove("bg-skyblue");
	} else {
		document.body.classList.remove('dark-mode');
	}
}

function clearContent(){
    document.getElementById('chatbox').innerHTML = '';
}

const url = new URL(window.location.href);
const key = url.searchParams.get('key');
if (key) {
    $("#apiKey").val(key);
    $("#apiKey").hide();
}
const chatbox = $("#chatbox");
const userInput = $("#userInput");
const sendButton = $("#sendButton");
let messages = [];

chatbox.append('<pre><div class="message left-side">Hello! welcome, how can i help you?</div></pre>');

sendButton.on("click", () => {
    const message = userInput.val();
    if (message) {
        messages.push({
            "role": "user",
            "content": message
        });
		const displaytext = window.markdownit().render(message);
		let userMessageHtml = '<pre><div class="message right-side "  >' + displaytext + '</div></pre>';
		chatbox.append(userMessageHtml);
		chatbox.animate({ scrollTop: 20000000 }, "slow");
		if(userInput.val() === "P") {
			userInput.val("");
			sendButton.val("Wait...");
			const botMessageWaitHtml = '<pre><div class="message left-side">Wait a moment...</div></pre>';
        	chatbox.append(botMessageWaitHtml);
      	  fetchCstm()
			//chatbox.append('<pre><div class="message left-side">Apa jing?</div></pre>');
		} else {
		if(userInput.val() === "p") {
			userInput.val("");
			sendButton.val("Wait...");
			const botMessageWaitHtml = '<pre><div class="message left-side">Wait a moment...</div></pre>';
        	chatbox.append(botMessageWaitHtml);
      	  fetchCstm()
			//chatbox.append('<pre><div class="message left-side">Apa jing?</div></pre>');
		} else {
		if(userInput.val() === "Siapa itu dani") {
			userInput.val("");
			sendButton.val("Wait...");
			const botMessageWaitHtml = '<pre><div class="message left-side">Wait a moment...</div></pre>';
        	chatbox.append(botMessageWaitHtml);
      	  fetchCstm2()
			//chatbox.append('<pre><div class="message left-side">Apa jing?</div></pre>');
		} else {
		if(userInput.val() === "Siapa itu dani?") {
			userInput.val("");
			sendButton.val("Wait...");
			const botMessageWaitHtml = '<pre><div class="message left-side">Wait a moment...</div></pre>';
        	chatbox.append(botMessageWaitHtml);
      	  fetchCstm2()
			//chatbox.append('<pre><div class="message left-side">Apa jing?</div></pre>');
		} else {
        userInput.val("");
        sendButton.val("Wait...");
		//sendButton.prop("disabled", true);
        fetchMessages();
        const botMessageWaitHtml = '<pre><div class="message left-side">Wait a moment...</div></pre>';
        chatbox.append(botMessageWaitHtml);
    }
    }
    }
    }
    }
});

userInput.on("keydown", (event) => {
    if (event.keyCode === 13 && !event.ctrlKey && !event.shiftKey) {
        event.preventDefault();
        sendButton.click();
    } else if (event.keyCode === 13 && (event.ctrlKey || event.shiftKey)) {
        event.preventDefault();
        const cursorPosition = userInput.prop("selectionStart");
        const currentValue = userInput.val();

        userInput.val(
            currentValue.slice(0, cursorPosition) +
            "\n" +
            currentValue.slice(cursorPosition)
        );
        userInput.prop("selectionStart", cursorPosition + 1);
        userInput.prop("selectionEnd", cursorPosition + 1);
    }
});

function fetchCstm() {
	const htmlText = 'Apa ler?'
	const msgc = '<pre><div class="message left-side" id="' + CryptoJS.MD5(htmlText) + '">' + htmlText + '</div><i class="far fa-clipboard ml-1 btn btn-outline-dark" id="' + CryptoJS.MD5(htmlText) + '-copy"></i></pre>'; 
	chatbox.append(msgc)
    //chatbox.append('<pre><div class="message left-side">Apa jing?</div></pre>');
    var copyIcon = document.getElementById(CryptoJS.MD5(htmlText) + '-copy'); 
			var copyText = document.getElementById(CryptoJS.MD5(htmlText));

			copyIcon.addEventListener("click", function() {
			  var tempTextarea = document.createElement("textarea");
			  tempTextarea.value = copyText.textContent;
			  document.body.appendChild(tempTextarea);
			  tempTextarea.select();
			  document.execCommand("copy");
			  document.body.removeChild(tempTextarea);
			  
			  // Display "Copied!" popup
			  var copyPopup = document.getElementById("copy-popup");
			  copyPopup.style.display = "block";
			  setTimeout(function() {
				copyPopup.style.display = "none";
			  }, 1000); // Display for 1 second
			});
	chatbox.animate({ scrollTop: 20000000 }, "slow");
    sendButton.val("Send");
	sendButton.prop("disabled", false);
}

function fetchCstm2() {
	const htmlText = 'Dani adalah seorang freelancer dan dia yang menciptakan saya sebagai AI, dia seorang programmer, role dani di dunia programmer adalah: Full Stack Web Developer, dani kuliah di: <mark style="background-color:yellow;">C.U.Y University - Bandung</mark>, dia tinggal di kota bogor, jawa barat, indonesia.';
	const msgc = '<pre><div class="message left-side" id="' + CryptoJS.MD5(htmlText) + '">' + htmlText + '</div><i class="far fa-clipboard ml-1 btn btn-outline-dark" id="' + CryptoJS.MD5(htmlText) + '-copy"></i></pre>'; 
	chatbox.append(msgc)
    //chatbox.append('<pre><div class="message left-side">Apa jing?</div></pre>');
    var copyIcon = document.getElementById(CryptoJS.MD5(htmlText) + '-copy'); 
			var copyText = document.getElementById(CryptoJS.MD5(htmlText));

			copyIcon.addEventListener("click", function() {
			  var tempTextarea = document.createElement("textarea");
			  tempTextarea.value = copyText.textContent;
			  document.body.appendChild(tempTextarea);
			  tempTextarea.select();
			  document.execCommand("copy");
			  document.body.removeChild(tempTextarea);
			  
			  // Display "Copied!" popup
			  var copyPopup = document.getElementById("copy-popup");
			  copyPopup.style.display = "block";
			  setTimeout(function() {
				copyPopup.style.display = "none";
			  }, 1000); // Display for 1 second
			});
	chatbox.animate({ scrollTop: 20000000 }, "slow");
    sendButton.val("Send");
	sendButton.prop("disabled", false);
}

function fetchMessages() {
	//const apiKey = "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";
	const apiKey = $("#apiKey").val();
    var settings = {
     	url: "https://api.openai.com/v1/chat/completions",
         method: "POST",
         timeout: 0,
         headers: {
         	"Authorization": "Bearer " + apiKey,
              "Content-Type": "application/json"
          },
          data: JSON.stringify({
           	model: "gpt-3.5-turbo",
               messages: messages
           })
		};
        $.ajax(settings).done(function(response) {
            const message = response.choices[0].message;
            messages.push({
                "role": message.role,
                "content": message.content
            });
			const htmlText = window.markdownit().render(message.content);
			const botMessageHtml = '<pre><div class="message left-side" id="' + CryptoJS.MD5(htmlText) + '">' + htmlText + '</div><i class="far fa-clipboard ml-1 btn btn-outline-dark" id="' + CryptoJS.MD5(htmlText) + '-copy"></i></pre>'; 

            chatbox.append(botMessageHtml);

			// Add event listener to the copy icon 
			var copyIcon = document.getElementById(CryptoJS.MD5(htmlText) + '-copy'); 
			var copyText = document.getElementById(CryptoJS.MD5(htmlText));

			copyIcon.addEventListener("click", function() {
			  var tempTextarea = document.createElement("textarea");
			  tempTextarea.value = copyText.textContent;
			  document.body.appendChild(tempTextarea);
			  tempTextarea.select();
			  document.execCommand("copy");
			  document.body.removeChild(tempTextarea);
			  
			  // Display "Copied!" popup
			  var copyPopup = document.getElementById("copy-popup");
			  copyPopup.style.display = "block";
			  setTimeout(function() {
				copyPopup.style.display = "none";
			  }, 1000); // Display for 1 second
			});
			
			chatbox.animate({ scrollTop: 20000000 }, "slow");
            sendButton.val("Send");
            sendButton.prop("disabled", false);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            //sendButton.val("Error");
            sendButton.val("Send");
			let errorText = 'Please provide openAI API key and try again.';
			let errorMessage = '<pre><div class="message left-side col-error" >' + errorText + '</div></pre>';
            chatbox.append(errorMessage);
			chatbox.animate({ scrollTop: 20000000 }, "slow");
        }
	);
}