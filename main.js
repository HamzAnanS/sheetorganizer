const items = document.querySelectorAll('.item');
const icon = document.querySelector('.icon');

const welcome = document.querySelector('.welcome');
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');

const sheetContainer = document.querySelector('.sheet-container');
const formContainer = document.querySelector('.form-container');


const salesSheet = [{
        name: "Sales Log",
        link: `https://docs.google.com/spreadsheets/d/1GS7Hk56wwawZ_lErErIWfmOZhYtnSC2elv2gDN5Zq3U/edit?usp=sharing`
    },
    {
        name: "Sale Forms",
        link: `https://docs.google.com/spreadsheets/d/1CiEth6HPPRQjx25XToZt8-B0gEMzoqQzC9Mwq42Bd8U/edit?usp=sharing`
    }
]

const saleForm = [{
    name: "Sale Form",
    link: `https://forms.gle/nGVvWREugVU6PqAs8`
}]

const payoutSheet = [{
        name: "Payout Forms",
        link: `https://docs.google.com/spreadsheets/d/1eJs4ymQ2hcetF7jDc4kxbh6L8GdwUCRY7n8WjXNhmf8/edit?usp=sharing`
    },
    {
        name: "Payout List",
        link: `https://docs.google.com/spreadsheets/d/1JEwPZ8mHiEw3cKL2SukJZUeUauOOeS2SUZpxdUUwsmo/edit?usp=sharing`
    },
    {
        name: "Payout Summary",
        link: `https://docs.google.com/spreadsheets/d/16o6uKE5gIDlPzmBh7QqJb3z05Xz2AJWwfvkH1hbbplA/edit?usp=sharing`
    }]

const payoutForm = [{
    name: "Payout Form",
    link: `https://forms.gle/DYVobpn7yTXKkT8e8`
    }
]

const paymentSheet = [{
        name: "Payment Form",
        link: `https://docs.google.com/spreadsheets/d/1hyA8Sc4yeBjC77iy1a3LO-lSiDmuRTqgUGCIsWIGnso/edit?usp=sharing`
    },
    {
        name: "Payment Form (Miscellaneous)",
        link: `https://docs.google.com/spreadsheets/d/1F3BQU2u6Bfb9xbJIRuGpbzdlXx9z8rbtvYBXHIjyQLY/edit?usp=sharing`
    }
]

const paymentForm = [{
    name: "Payment Form (Sale)",
    link: `https://forms.gle/hJz6sQQ5an5UUsMYA`
    },
    {
        name: "Payment Form (Miscellaneous)",
        link: `https://forms.gle/U44ApSK9wCWL4k3z5`
    }]


const cashflowSheet = [{
    name: "Daily Cash Flow",
    link: `https://docs.google.com/spreadsheets/d/1-99gT0vTzW3d9i9hXnRYDldsqYp5JHQvrBL-V8izV0M/edit?usp=sharing`
}]

const purchaseSheet = [{
    name: "Car Purchase Sheet",
    link: `https://docs.google.com/spreadsheets/d/1UGk5EppeEuKwoSa7VKkwnK0gjovq5CdPzexKaBGdaBM/edit?usp=sharing`
}]

const purchaseForm = [{
    name: "Car Purchase Form",
    link: `https://forms.gle/WiVBK7ttHmVQpAzk6`
}]

const overtimeSheet = [{
    name: "Overtime Sheet",
    link: `https://docs.google.com/spreadsheets/d/12dvpABB2aco1xvVVtRhsTxm2ebwWDXJOCi6-1-AT7fg/edit?usp=sharing`
}]

const overtimeForm = [{
    name: "Overtime Form",
    link: `https://forms.gle/SsGEshi7mQJijVm28`
}]


function execute(item) {
    let sheets;
    let forms;
    if(item==='item-1'){
        sheets = salesSheet;
        forms = saleForm;
    }
    else if(item==='item-2'){
        sheets = payoutSheet;
        forms = payoutForm;
    }
    else if(item==='item-3'){
        sheets = paymentSheet;
        forms = paymentForm;
    }
    else if(item==='item-4'){
        sheets = cashflowSheet;
    }
    else if(item==='item-5'){
        sheets = purchaseSheet;
        forms = purchaseForm;
    }
    else if(item==='item-6'){
        sheets = overtimeSheet;
        forms = overtimeForm;
    }
        let sheetsHTML = '';

        sheets.forEach(sheet =>{
            sheetsHTML+=`<div class="sheet" onclick="window.open('${sheet.link}', '_blank')">
                    <h3>${sheet.name}</h3>
                </div>`
        })

        sheetContainer.innerHTML = sheetsHTML;

        let formHTML='';

        if(item!=='item-4'){
            forms.forEach(form =>{
            formHTML+=`<div class="form" onclick="window.open('${form.link}', '_blank')">
                    <h3>${form.name}</h3>
                </div>`
            });
        }
        
        
        (item==="item-4")?formContainer.innerHTML = '':formContainer.innerHTML = formHTML;
}


document.addEventListener('keydown', (event)=>{
    if(event.key==='Escape'){
        sec1.style.display = 'none';
        sec2.style.display = 'none';

        welcome.style.display = 'flex';

        for(let i=1;i<7;i++){
            document.querySelector(`.icon-item-${i}`).style.display = 'none';
        }

        items.forEach(iTem =>{
            iTem.style.backgroundColor = '#292929';
            iTem.style.pointerEvents = 'auto';
        })
    }
})



items.forEach(item => {
    item.addEventListener('click', ()=>{
        for(let i=1;i<7;i++){
            document.querySelector(`.icon-item-${i}`).style.display = 'none';
        }

        items.forEach(iTem =>{
            iTem.style.backgroundColor = '#292929';
            iTem.style.pointerEvents = 'auto';
        })

        document.querySelector(`.icon-${item.dataset.item}`).style.display = 'block';
        item.style.pointerEvents = 'none';
        item.style.backgroundColor = '#202020';

        welcome.style.display = 'none';

        sec1.style.display = 'block';
        sec2.style.display = 'block';

        execute(item.dataset.item);


    })
})







