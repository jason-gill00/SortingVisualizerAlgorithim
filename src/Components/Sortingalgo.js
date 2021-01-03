import React, {useState, useEffect} from 'react'
import stop from './img/stop.png'

const Sortingalgo = () => {
    const [data, setData] = useState([])
    const [reset, setReset] = useState(true)
    const [sorting, setSorting] = useState(false)


    const resetData = async() => {
        if(sorting === true){
            setSorting(!sorting);
        }
        const array = []
        for(let i=0; i<100; i++){
            array[i] = Math.floor(Math.random() * (900-1+1))+1;
        }
        setData(array)
        const arrayBars = document.getElementsByClassName('bar');
        for(let i=0; i<data.length; i++){
            const ba = arrayBars[i].style
            setTimeout(() => {ba.backgroundColor = '#49a6e9'}, 1);
            await sleep(20)
        }
    }

    useEffect(()=> {
        if(reset){
        resetData();
        setReset(!reset)
        }
    },[data])
    
    const sleep = (miliseconds) => {
        return new Promise(resolve => setTimeout(resolve, miliseconds))
    }
 

    const selectionSort = async() => {
        const sortSpeed = -50;
        const arr = data.splice(0)
        console.log(data)
        let temp = 0;
        for(let i=0; i<arr.length;i++){
            const arrayBars = document.getElementsByClassName('bar');
            const barOne = arrayBars[i].style
            setTimeout( () => {barOne.backgroundColor = 'green'}, 0.05);
            for(let j=i+1; j<arr.length; j++){
                const barTwo = arrayBars[j].style
                setTimeout( () => {barTwo.backgroundColor = 'red'}, 0.05);
                await sleep(0.05)
                if(arr[i] >= arr[j]){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    setData([...arr])

                }
                setTimeout( () => {barTwo.backgroundColor = '#49a6e9'}, 0.05);
            }//5dbcd2
            setTimeout( () => {barOne.backgroundColor = '#49a6e9'}, 0.05);
            await sleep(sortSpeed);
        }
        console.log(arr);

        const arrayBars = document.getElementsByClassName('bar');
        for(let i=0; i<arr.length; i++){
            const ba = arrayBars[i].style
            setTimeout(() => {ba.backgroundColor = '#5dbcd2'}, 1);
            await sleep(20)
        }
    }

    const insertionSort = async() => {
        setSorting(true)
        const sortSpeed = 15;
        console.log(data)
        const arr = data.slice()
        let temp = 0
        for(let i=1; i<arr.length; i++){
            const arrayBars = document.getElementsByClassName('bar');
            const barOne = arrayBars[i].style
            setTimeout( () => {barOne.backgroundColor = 'green'}, sortSpeed);
            await sleep(100)
            let j = i
            while(j>0 && arr[j-1] > arr[j]){
                const barTwo = arrayBars[j].style
                setTimeout( () => {barTwo.backgroundColor = 'red'}, sortSpeed);
                await sleep(sortSpeed)
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                j--;
                setData([...arr])
                setTimeout( () => {barTwo.backgroundColor = '#49a6e9'}, sortSpeed);
            }
            setTimeout( () => {barOne.backgroundColor = '#49a6e9'}, sortSpeed);
            await sleep(sortSpeed);
         }
         const arrayBars = document.getElementsByClassName('bar');
         for(let i=0; i<arr.length; i++){
             const ba = arrayBars[i].style
             setTimeout(() => {ba.backgroundColor = '#5dbcd2'}, 1);
             await sleep(20)
         }
         setSorting(false)
    }

    const bubbleSort = async() => {
        setSorting(true)
        const sortSpeed=0.001
        const arr = data.slice();
        let temp =0
    
        for(let i=0; i<arr.length-1; i++){
            const arrayBars = document.getElementsByClassName('bar');
            for(let j=0; j<arr.length-1-i; j++){
                const barTwo = arrayBars[j].style
                setTimeout( () => {barTwo.backgroundColor = 'red'});
                // await sleep(sortSpeed)
                const barThree = arrayBars[j+1].style
                setTimeout( () => {barThree.backgroundColor = '#87b24d'});
                await sleep(sortSpeed)
                if(arr[j] >= arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    setData([...arr])
                }
                setTimeout( () => {barTwo.backgroundColor = '#49a6e9'});
            }
        }
        const arrayBars = document.getElementsByClassName('bar');
        for(let i=0; i<arr.length; i++){
            const ba = arrayBars[i].style
            setTimeout(() => {ba.backgroundColor = '#5dbcd2'}, 1);
            await sleep(20)
        }
        setSorting(false)
    }

    function getMergeSortAnimations(array) {
        const animations = [];
        if (array.length <= 1) return array;
        const auxArr = array.slice();
        mergeSortHelper(array, 0, array.length - 1, auxArr, animations);
        return animations;
      }
      
    function mergeSortHelper(mainArray,startIdx,endIdx,auxArr,animations) {
        if (startIdx === endIdx) return;
        const middleIdx = Math.floor((startIdx + endIdx) / 2);
        mergeSortHelper(auxArr, startIdx, middleIdx, mainArray, animations);
        mergeSortHelper(auxArr, middleIdx + 1, endIdx, mainArray, animations);
        doMerge(mainArray, startIdx, middleIdx, endIdx, auxArr, animations);
    }
      
    function doMerge(mainArray,startIdx,middleIdx,endIdx,auxArr,animations) {
        let k = startIdx;
        let i = startIdx;
        let j = middleIdx + 1;
        while (i <= middleIdx && j <= endIdx) {
            animations.push([i, j]);
            animations.push([i, j]);
            if (auxArr[i] <= auxArr[j]) {
            animations.push([k, auxArr[i]]);
            mainArray[k++] = auxArr[i++];
            } else {
            animations.push([k, auxArr[j]]);
            mainArray[k++] = auxArr[j++];
            }
        }
        while (i <= middleIdx) {
            animations.push([i, i]);
            animations.push([i, i]);
            animations.push([k, auxArr[i]]);
            mainArray[k++] = auxArr[i++];
        }
        while (j <= endIdx) {
            animations.push([j, j]);
            animations.push([j, j]);
            animations.push([k, auxArr[j]]);
            mainArray[k++] = auxArr[j++];
        }
      }

    const mergeSort = async() => {
        setSorting(true)
        const sortSpeed = 5;
        const arr = data.slice();
        const animations = getMergeSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : '#5dbcd2';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * sortSpeed);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * sortSpeed);
          }
        }
        const arrayBars = document.getElementsByClassName('bar');
        for(let i=0; i<data.length; i++){
            const ba = arrayBars[i].style
            setTimeout(() => {ba.backgroundColor = 'green'}, 1);
            await sleep(20)
        }

      }


    return (
        <section className="sorting-app">
            <header>
                <div className='app-name'>
                    <h1>Sorting Algorithim Visualizer</h1>
                </div>
            </header>
            <div className="option-container">
                <button className='btn' id='insertion-sort' disabled={sorting} onClick={() => {insertionSort()}}>Insertion Sort</button>
                <button className='btn' id='merge-sort' disabled={sorting} onClick={() => {mergeSort()}}>Merge Sort</button>
                <button className='btn' id='bubble-sort' disabled={sorting} onClick={() => {bubbleSort()}}>Bubble Sort</button>
                <button type="button" className="btn" id="selection-sort-btn" disabled={sorting} onClick={() => {selectionSort()}}>Selection Sort</button>
                <button className='btn' id='reset-btn' onClick={() => {resetData()}}>Reset</button>
                <button className='stop-btn' id='refresh-btn' onClick={() => window.location.reload()}>
                    <img className='stop-btn' src={stop} alt=""/>
                </button>
            </div>
            <div className="data-container">
                
                {data.map((bar, id)=>{
                    return (
                        <div className="bar" key={id} style={{height:`${bar}px`}}>
                        </div>
                    );
                })};
            </div>
            <div className='name'>
                <h2>Jason Gill</h2>
            </div>
        </section>
    );
}

export default Sortingalgo;