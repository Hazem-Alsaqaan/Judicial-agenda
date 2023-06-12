import React, { Fragment, useCallback } from "react";
import { useState } from "react";
import { useDispatch, useSelector,  } from "react-redux";
import userAvatar from "../../pictures/user-avatar.png"
import { updateUser } from "../../redux/action/userAction";
import "./ProfileIcone.css"

const ProfileImage = ()=>{
    const {user} = useSelector((state)=>state.userSlice)
    const dispach = useDispatch()
    const [pictureUpload, setPictureUpload] = useState(user)

    //upload
    const handleUploadPhoto = useCallback((e)=>{
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
            setPictureUpload(
                {...pictureUpload, 
                    _id: user._id,
                    picture: reader.result,
                }
                )
        })
        reader.readAsDataURL(file)
    },[pictureUpload, user._id])
    //update
    const handleUdateUserPicture = useCallback((e)=>{
        e.preventDefault()
        dispach(updateUser(pictureUpload)) 
    },[dispach, pictureUpload])
    return(
        <Fragment>
            <section className="profile-picture">
                <div>
                    <img className="user-pic" src={user.picture ? user.picture : userAvatar} alt=""/>
                    <form onSubmit={(e)=>handleUdateUserPicture(e)}>
                        <div>
                            <input
                            type="file"
                            onChange={(e)=>handleUploadPhoto(e)}
                            />
                            <button className="choose">choose</button>
                            <button className="save" type="submit">save</button>
                        </div>
                    </form>
                </div>
                
            </section>
        </Fragment>
    )
}
export default ProfileImage

//`https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png`