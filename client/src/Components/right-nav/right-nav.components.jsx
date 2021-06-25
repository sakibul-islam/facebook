import './right-nav.styles.scss';
import ItemContainer from '../item-container/item-container.component';

import sponsored2 from './image/sponsored2.jpg';
import sponsored3 from './image/sponsored3.jpg';

import reactjsDevPP from './image/reactjsDev.png';
import ProfilePic from '../profile-pic/profile-pic.component';
import { MessageIcon, NotificationIcon, PromotionIcon, PlusIcon } from '../icons/icons';

const RightNav = () => {

  return (
    <div className='right-nav'>
      <div className='content'>
        <div className='section sponsored'>
          <h2 className='header'>Sponsored</h2>
          <ItemContainer 
            iconSrc={sponsored3} 
            itemName="Build & Train Machine Learning Models Fast..." 
            extra='github.com/sakibul-islam'
          />
          <ItemContainer 
            iconSrc={sponsored2} 
            itemName="3 Reasons Why You Can’t Afford to Skip on User Experience..." 
            extra='github.com/sakibul-islam'
          />
        </div>
        <hr/>
        <div className='section pages'>
          <h2 className='header'>Your Pages</h2>
          <div className='page'>
            <ItemContainer itemName='Creative Developer'>
              <ProfilePic photoURL={reactjsDevPP} />
            </ItemContainer>
            <div className='updates'>
              <ItemContainer itemName='1 Message'>
                <MessageIcon/>
              </ItemContainer>
              <ItemContainer itemName='20+ Notifications'>
                <NotificationIcon/>
              </ItemContainer>
              <ItemContainer itemName='Create Promotion'>
                <PromotionIcon/>
              </ItemContainer>
            </div>
          </div>
        </div>
        <hr/>
        <div className='section contacts'>
          <div className='header'>
            Contacts
          </div>
          <ItemContainer itemName='Fred Weasley'>
            <ProfilePic photoURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaBRDrxWQe8kk05sz_CSNozXXw9yNW8SqXQ&usqp=CAU" />
          </ItemContainer>
          <ItemContainer itemName='Luna Lovegood'>
            <ProfilePic photoURL="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/LunaLovegood.jpeg/220px-LunaLovegood.jpeg" />
          </ItemContainer>
          <ItemContainer itemName='Harry Potter'>
            <ProfilePic photoURL="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Harry_Potter_character_poster.jpg/220px-Harry_Potter_character_poster.jpg"/>
          </ItemContainer>
          <ItemContainer itemName='Hermione Granger'>
            <ProfilePic photoURL="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/220px-Hermione_Granger_poster.jpg" />
          </ItemContainer>
        </div>
        <div className='section group-conversations'>
          <div className='header'>
            Group Conversations
          </div>
          <ItemContainer itemName="Dumbledore's Army">
            <ProfilePic photoURL="https://www.gcpsk12.org/cms/lib/GA02204486/Centricity/Domain/7328/Dumbledore-s-Army-dumbledore-27s-army-123514_1024_768.jpg" />
          </ItemContainer>
          <ItemContainer itemName='Create New Group'>
            <PlusIcon/>
          </ItemContainer>
        </div>
      </div>
    </div>
  )
}

export default RightNav;