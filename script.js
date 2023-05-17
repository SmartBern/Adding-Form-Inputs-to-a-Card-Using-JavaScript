function submitBtn()
{
    var nameoflaptop = document.querySelector('.laptop-name').value;
    var processoroflaptop = document.querySelector('.laptop-processor').value;
    var genoflaptop = document.querySelector('.laptop-gen').value;
    var ramoflaptop = document.querySelector('.laptop-ram').value;
    var ssdoflaptop = document.querySelector('.laptop-ssd').value;
    var screenoflaptop = document.querySelector('.laptop-screensize').value;
    var backupoflaptop = document.querySelector('.laptop-backup').value;
    
    

    document.getElementById("output1").textContent = nameoflaptop;
    document.getElementById("output2").textContent = processoroflaptop;
    document.getElementById("output3").textContent = genoflaptop;
    document.getElementById("output4").textContent = ramoflaptop;
    document.getElementById("output5").textContent = ssdoflaptop;
    document.getElementById("output6").textContent = screenoflaptop;
    document.getElementById("output7").textContent = backupoflaptop;
     
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', function handleClick(event)
{
    event.preventDefault();
    const inputtexts = document.querySelectorAll('.laptop-name, .laptop-processor, .laptop-gen, .laptop-ram');
    const input_texts = document.querySelectorAll('.laptop-ssd, .laptop-screensize, .laptop-backup');

    inputtexts.forEach(input => {
        input.value = '';
    });

    input_texts.forEach(input => {
        input.value = '';
    });
});


