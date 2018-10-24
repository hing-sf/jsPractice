var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(prev, key) {
    console.log(key.type );
        if(key.type === 'sitting'){
            prev.sitting ++
        }
        if(key.type === 'standing'){
            prev.standing ++
        }
            return prev;
}, { sitting: 0, standing: 0 });

console.log(deskTypes)