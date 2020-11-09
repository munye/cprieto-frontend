import React from 'react'
import { ListPage } from 'material-ui-shell/lib/containers/Page'
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
    name: 'documento',
    label: 'Documento'
  },
  {
    name: '_id',
    label: 'Historia_Clinica'
  },
  {
    name: 'orden',
    label: 'Relacion_Vieja',
    type: "number"
  },
]

const Row = ({ index, style, data }) => {
  const { nombre, documento, _id, orden } = data
  return (
    <div key={`${nombre}_${index}`} style={style}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={`${nombre}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {documento}
              </Typography>
              <br />
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {`${_id}`}
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
              defaultMessage: 'Lista de Pacientes Sintéticos con {count} registros',
            },
            { count: list.length }
          ),
        }
      }}
    />
  )
}
