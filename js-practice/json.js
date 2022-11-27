// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
const json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol('id'), // JS의 특별한 Data : Symbol도 제외
    jump: () => { // 제외
        console.log(`${name} can be jump!`);
    },
};

json = JSON.stringify(rabbit, ["name"]); // name만 포함해서 JSON 변환 요청
console.log(json);

// stringify에 callback 함수 추가하여 사용법
// 모든 key, value가 전달되며, 첫 key는 전체 rabbit에 대해 key, value가 있음
// 좀 더 세밀하게 stringify할 때 사용 가능
json = JSON.stringify(rabbit, (key, value) => { 
    console.log(`key: ${key}, value: ${value}`);
    return (key === 'name') ? 'ellie' : value;
});

// 2. JSON to Object
// parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
});

rabbit.birthDate.getDate(); // 사용 가능
obj.birthDate.getDate(); // parse에 callback 함수를 추가하였기 때문에 사용 가능


// 3. 유용한 사이트
// 1) jsondiff.com : JSON 끼리의 차이점을 확인할 때 유용함
// 2) jsonbeautifier.org : format이 망가지는 경우 확인할 때 유용함
// 3) jsonparser.org : JSON으로부터 object가 어떻게 되는지
// 4) jsonValidator : JSON 이상할 때 확인하는 방법