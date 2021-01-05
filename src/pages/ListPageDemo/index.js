import React, { useState, useEffect } from 'react'
import { ListPage } from 'material-ui-shell/lib/containers/Page'
import Pagination from "@material-ui/lab/Pagination";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { useIntl } from 'react-intl'

import list from './data.json'

const fields = [
  {
    name: 'nombre',
    label: 'Nombre',
  },
  {
    name: 'email',
    label: 'E-Mail',
  },
  {
    name: 'orden',
    label: 'Orden',
    type: 'number',
  },
  {
    name: 'isActive',
    label: 'fiambre',
    type: 'bool',
  },
  {
    name: 'documento',
    label: 'Documento',
    type: 'date',
  },
  /*   {
      name: 'registrationTime',
      label: 'Registration time',
      type: 'time',
    },
   */
]


const Row = ({ index, style, data }) => {

  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { nombre, email, orden, isActive, documento } = data

  return (
    <div key={`${nombre}_${index}`} style={style}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={`${nombre} ${index}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {email}
              </Typography>
              <br />
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {`${orden} ${documento}`}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
    </div>
  )
}

export default function () {
  const intl = useIntl()

  return (
    <ListPage
      name="list_demo"
      list={list}
      fields={fields}
      Row={Row}
      listProps={{ itemSize: 91 }}
      getPageProps={(list) => {
        return {
          pageTitle: intl.formatMessage(
            {
              id: 'list_page_demo',
              defaultMessage: 'List Page demo with {count} rows',
            },
            { count: list.length }
          ),
        }
      }}
    />
  )
}
