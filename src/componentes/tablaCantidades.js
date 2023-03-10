

export const miTabla = {
    template: `
    <table class="table">
        <thead>
        <tr>
            <th>Cerveza</th>
            <th>Cantidad</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Pilsner</td>
            <td>2</td>
            <td>
            <button type="button" class="btn btn-primary">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        <tr>
            <td>IPA</td>
            <td>3</td>
            <td>
            <button type="button" class="btn btn-primary">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        <tr>
            <td>Stout</td>
            <td>1</td>
            <td>
            <button type="button" class="btn btn-primary">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        </tbody>
    </table>
    `
}