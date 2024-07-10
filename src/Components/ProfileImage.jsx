import { useState } from 'react';
import styled from 'styled-components';

const StyledProfileImage = styled.div`
    position: relative;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 170px;
    background-color: #c3c2b4; // Color de fondo para el marcador de posición
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin-top: 20px;
    border: 2px solid #609bda;
    
`;

const TextContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
const ImageText = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #161616;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    z-index: 1;
`;

const FileInput = styled.input`
    display: none; // Esto oculta el input
`;

const FileInputLabel = styled.label`
    padding: 5px;
    border-radius: 5px;
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    background-color: #7cbee4;
    color: white;
    cursor: pointer;
`;

function ProfileImage() {
    const [profileImage, setProfileImage] = useState('path/to/placeholder/image.jpg'); // Agrega una imagen de marcador de posición aquí

    const handleImageUpload = (event) => {
        setProfileImage(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <div>
        <StyledProfileImage $image={profileImage}>
            <TextContainer>
                <ImageText>Subir imagen</ImageText>
            </TextContainer>
            <FileInput type="file" id="file" onChange={handleImageUpload} />
        </StyledProfileImage>
        <FileInputLabel htmlFor="file">Seleccionar archivo</FileInputLabel>
    </div>
    );
}

export default ProfileImage;