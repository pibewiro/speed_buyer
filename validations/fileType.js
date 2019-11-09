function checkFileType(file)
{
    const type = file.split("/").pop();
    console.log("File Type:", type);
    const validTypes = ['png', 'jpeg', 'jpg', 'gif', 'pdf']
    if(validTypes.indexOf(type) === -1)
    {
        console.log("Invalid File type")
        return false
    }

    return true
}


module.exports = checkFileType;
