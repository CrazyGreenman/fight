(function( $, root){
    function skillCb (data) {
        console.log(data)
        root.person1Skill = data[root.dataArray[0]];
        root.person2Skill = data[root.dataArray[1]];
        console.log(data)
        // console.log(root.person1Skill)
        // window.onload = (function(){
             root.skillBuild();
        // });
        // root.skillBuild()
    }
    root.skillCb = skillCb;
}(window.$,window.page1 ||(window.page1={})))