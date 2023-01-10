// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import UserLayout from 'src/layouts/UserLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={UserLayout}>
        <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
          <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/posts" page={PostPostsPage} name="posts" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Members" titleTo="members" buttonLabel="New Member" buttonTo="newMember">
          <Route path="/members/new" page={MemberNewMemberPage} name="newMember" />
          <Route path="/members/{id:Int}/edit" page={MemberEditMemberPage} name="editMember" />
          <Route path="/members/{id:Int}" page={MemberMemberPage} name="member" />
          <Route path="/members" page={MemberMembersPage} name="members" />
        </Set>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
