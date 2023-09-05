// Exercise: level 1
const countries =[
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'

]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
// 1. Declare an empty array;
const emptyArray = [];
console.log(emptyArray);
// 2. Declare an array with more than 5 number of elements
const arrayOfFiveElements = [1, 2, 3, 4, 5, 6];
console.log(arrayOfFiveElements);
// 3. Find the length of your array
lengthOfArray = arrayOfFiveElements.length;
console.log(lengthOfArray);
// 4. Get the first item, the middle item and the last item of the array
const arrayOfFiveElements = [1, 2, 3, 4, 5, 6];
const firstItem = arrayOfFiveElements[0];
const middleItem = arrayOfFiveElements[2];
const lastItem = arrayOfFiveElements[arrayOfFiveElements.length -1];
console.log(firstItem, middleItem, lastItem);
// 5. Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5
const mixedDataTypes = ['string', 1, true, null, undefined, {name: 'John'}];
console.log(mixedDataTypes);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
// 7. Print the array using console.log()
console.log(itCompanies);
// 8. Print the number of companies in the array
numberss = itCompanies.length;
console.log(numberss);
// 9. Print the first company, middle and last company
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[3];
const lastCompany = itCompanies[itCompanies.length -1];
console.log(firstCompany, middleCompany, lastCompany);
// 10. Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
// 11. Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(`${itCompanies[0]},${itCompanies[1]},${itCompanies[2]},${itCompanies[3]},${itCompanies[4]},${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`);
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const itCompanies11 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const company = prompt('Enter a company name');
if (itCompanies.includes(company)){
    console.log(`${company} is found:`);

}
else {
    console.log('Company not found');
}
// 14. Filter out companies which have more than one 'o' without the filter method
const itCompanies1= ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const companiesWithMoreThanOneO = [];
for ( let i = 0; i < itCompanies1.length;i++){
    if (itCompanies1[i].includes('oo')){
        companiesWithMoreThanOneO.push(itCompanies1[i]);
    }
    else {
        continue;
    }
    console.log(companiesWithMoreThanOneO);
}
// 15. Sort the array using sort() method
const itCompanies2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
sort = itCompanies2.sort();
console.log(sort);
// 16. Reverse the array using reverse() method
const itCompanies3 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
reverse = itCompanies3.reverse();
console.log(reverse);
// 17. Slice out the first 3 companies from the array
const itCompanies4 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
slice = itCompanies4.slice(0,3);
console.log(slice);
// 18. Slice out the last 3 companies from the array
const itCompanies5 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
slice = itCompanies5.slice(4,7);
console.log(slice);
// 19. Slice out the middle IT company or companies from the array
const itCompanies6 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
slice = itCompanies6.slice(2,5);

console.log(slice);
// 20. Remove the first IT company from the array
const itCompanies7 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies7.shift();
console.log(itCompanies7);
// 21. Remove the middle IT company or companies from the array
const itCompanies8 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies8.splice(2,3);
console.log(itCompanies8);
// 22. Remove the last IT company from the array
const itCompanies9 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies9.pop();
console.log(itCompanies9);
// 23. Remove all IT companies
const itCompanies10 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies10.splice(0,7);
console.log(itCompanies10);
// 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js ans store the webTechs array in to this file. Access both file in main.js file
// Exercise: level 2
// 1. Create a seperate countries.js file and store the countries array in to this file, create a separate file web_techs.js ans store the webTechs array in to this file. Access both file in main.js file

