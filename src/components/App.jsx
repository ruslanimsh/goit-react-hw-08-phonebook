import React, { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
    // dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <section className={css.section}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </section>
  );
};



// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import css from './App.module.css';
// import { getIsLoading, getError } from 'redux/contacts/selectors';
// import { fetchContacts } from 'redux/contacts/operations';
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 20,
//         color: '#010101',
//       }}
//     >
//       <section className={css.section}>
//         <h1>Phonebook</h1>
//         <ContactForm />

//         <h2>Contacts</h2>
//         <Filter />
//         {isLoading && !error}
//         <ContactList />
//       </section>
//     </div>
//   );
// };
