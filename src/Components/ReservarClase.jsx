import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormikInput } from './FormikInput';
import { FormikSelect } from './FormikSelect';
import { FormikDatePicker } from './FormikDatePicker';
import { FormikTimePicker } from './FormikTimePicker';
import { FormikCheckbox } from './FormikCheckbox';
import { FormikRadio } from './FormikRadio';
import { FormikTextArea } from './FormikTextArea';
import { FormikFileUpload } from './FormikFileUpload';
import { FormikImageUpload } from './FormikImageUpload';
import { FormikMultiSelect } from './FormikMultiSelect';
import { FormikSelectAsync } from './FormikSelectAsync';
import { FormikSelectCreatable } from './FormikSelectCreatable';
import { FormikSelectAsyncCreatable } from './FormikSelectAsyncCreatable';

const StyledLink = styled(Link)`
    color: #353333;
    text-decoration: none;
    font-size: 8em;
    font-weight: bold;
    font-family: monospace;
    position: relative;
    
    &:hover {
        color: #b36d84;
    }
    
    &:hover div {
        visibility: visible;
        opacity: 1;
    }
    `;

const StyledLi = styled.li`
    list-style: none;
    text-align: center;
    `;

const ImageContainer = styled.div`
    visibility: hidden;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    top: -220px;
    left: 50%;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    `;

function Clases() {
    const [image, setImage] = useState();

    const clases = ['Yoga', 'Fuerza', 'Pilates', 'Boxeo', 'Cardio'];

    return (
        <section>
            <ul>
                {clases.map((clase, index) => (
                    <StyledLi key={clase}>
                        <StyledLink
                            to={{
                                pathname: `/${clase.toLowerCase()}`,
                                state: { clase }
                            }}
                        >
                            {clase}
                            <ImageContainer style={{ backgroundImage: `url(${image})` }} />
                        </StyledLink>
                    </StyledLi>
                ))}
            </ul>
        </section>
    );
}

export default Clases;
// `;

