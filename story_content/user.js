function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fpNwNjqg89":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwhGlVYG8aGp2yIvU4xvy58471l9B11KZoljXHPYclm9unKtXlmSshMnnFNuLkVC59mtA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

