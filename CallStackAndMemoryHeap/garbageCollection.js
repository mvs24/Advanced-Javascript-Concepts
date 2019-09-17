//Javascript automatically freeze up the memory that we no longer use and collect garbage
// remains only the data we need

var obj = {
    text: "something"
}
obj=5;

// this obj is is garbaged
/* var obj = {
   text: "something"
 }*/

 console.log(obj);  //return 5;
 
// mark-and-sweep algorithm

// Mark(root)
// If markedBit(root) = false then
// markedBit(root) = true
// For each v referenced by root
//      Mark(v)

// Sweep()
// For each object p in heap
//     If markedBit(p) = true then
//         markedBit(p) = false
//     else
//         heap.release(p)
