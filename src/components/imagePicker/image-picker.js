import { React } from 'react';
import { useImagePickerStyles } from '../../styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



function ImagePicker({ selectedImage, imageList, onImageChange, }) {

    const classes = useImagePickerStyles();

    return (

        <div className={classes.root}>
            {imageList.map((photo, i) => (
                <div key={photo} className={selectedImage == photo ? classes.imageContainerSelected : classes.imageContainer}>
                    <CheckCircleIcon className={selectedImage == photo ? classes.tickSelected : classes.tick} />
                    <img className={classes.img} src={photo} onClick={() => onImageChange(photo)}></img>
                </div>
            ))}

        </div>
    );
}

export default ImagePicker;
