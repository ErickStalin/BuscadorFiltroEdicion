function actualizarResultados() {
  const keywordInput = document.getElementById("keyword");
  const selectedCategory = document.getElementById("categorySelect").value;
  const isCategoryFilterChecked =
    document.getElementById("categoryFilter").checked;

  if (isCategoryFilterChecked) {
    fetch(`/filtrar?subgrupo=${selectedCategory}`) 
      .then((response) => response.json()) 
      .then((data) => mostrarResultados(data)) 
      .catch((error) => console.error("Error al filtrar productos:", error));
  } else {
    const keyword = keywordInput.value;
    fetch(`/buscar?keyword=${keyword}`)
      .then((response) => response.json())
      .then((data) => mostrarResultados(data))
      .catch((error) => console.error("Error al buscar productos:", error));
  }
}

function mostrarResultados(data) {
  const resultsBody = document.getElementById("resultsBody");
  const resultsContainer = document.getElementById("results");

  resultsBody.innerHTML = "";

  if (data.length === 0) {
    resultsContainer.style.display = "none";
  } else {
    resultsContainer.style.display = "block";
    data.forEach((producto) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${producto.CodigoProducto}</td>
        <td>$${producto.precio1} <br><br> <button class="editButton1">Editar 1</button></td>
        <td>$${producto.precio2} <br><br> <button class="editButton2">Editar 2</button></td>
        <td>$${producto.precio3} <br><br> <button class="editButton3">Editar 3</button></td>
        <td>$${producto.precio4} <br><br> <button class="editButton4">Editar 4</button></td>
        <td>$${producto.precio5} <br><br> <button class="editButton5">Editar 5</button></td>
        <td>${producto.Subgrupo}</td>
      `;
      resultsBody.appendChild(newRow);

      const editButton1 = newRow.querySelector(".editButton1");
      editButton1.addEventListener("click", () => {
        const newPrice1 = prompt("Ingrese el nuevo precio 1:");
        if (newPrice1 !== null) {
          actualizarPrecio(producto.CodigoProducto, "precio1", newPrice1);
        }
      });

      const editButton2 = newRow.querySelector(".editButton2");
      editButton2.addEventListener("click", () => {
        const newPrice2 = prompt("Ingrese el nuevo precio 2:");
        if (newPrice2 !== null) {
          actualizarPrecio(producto.CodigoProducto, "precio2", newPrice2);
        }
      });

      const editButton3 = newRow.querySelector(".editButton3");
      editButton3.addEventListener("click", () => {
        const newPrice3 = prompt("Ingrese el nuevo precio 3:");
        if (newPrice3 !== null) {
          actualizarPrecio(producto.CodigoProducto, "precio3", newPrice3);
        }
      });

      const editButton4 = newRow.querySelector(".editButton4");
      editButton4.addEventListener("click", () => {
        const newPrice4 = prompt("Ingrese el nuevo precio 4:");
        if (newPrice4 !== null) {
          actualizarPrecio(producto.CodigoProducto, "precio4", newPrice4);
        }
      });

      const editButton5 = newRow.querySelector(".editButton5");
      editButton5.addEventListener("click", () => {
        const newPrice5 = prompt("Ingrese el nuevo precio 5:");
        if (newPrice5 !== null) {
          actualizarPrecio(producto.CodigoProducto, "precio5", newPrice5);
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchButton").addEventListener("click", () => {
    const keyword = document.getElementById("keyword").value;
    fetch(`/buscar?keyword=${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        const resultsBody = document.getElementById("resultsBody");
        const resultsContainer = document.getElementById("results");

        resultsBody.innerHTML = "";

        if (data.length === 0) {
          resultsContainer.style.display = "none";
        } else {
          resultsContainer.style.display = "block";
          data.forEach((producto) => {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
              <td>${producto.CodigoProducto}</td>
              <td>$${producto.precio1} <br><br> <button class="editButton1">Editar 1</button></td>
              <td>$${producto.precio2} <br><br> <button class="editButton2">Editar 2</button></td>
              <td>$${producto.precio3} <br><br> <button class="editButton3">Editar 3</button></td>
              <td>$${producto.precio4} <br><br> <button class="editButton4">Editar 4</button></td>
              <td>$${producto.precio5} <br><br> <button class="editButton5">Editar 5</button></td>
              <td>${producto.Subgrupo}</td>
            `;
            resultsBody.appendChild(newRow);

            const editButton1 = newRow.querySelector(".editButton1");
            editButton1.addEventListener("click", () => {
              const newPrice1 = prompt("Ingrese el nuevo precio 1:");
              if (newPrice1 !== null) {
                actualizarPrecio(producto.CodigoProducto, "precio1", newPrice1);
              }
            });

            const editButton2 = newRow.querySelector(".editButton2");
            editButton2.addEventListener("click", () => {
              const newPrice2 = prompt("Ingrese el nuevo precio 2:");
              if (newPrice2 !== null) {
                actualizarPrecio(producto.CodigoProducto, "precio2", newPrice2);
              }
            });

            const editButton3 = newRow.querySelector(".editButton3");
            editButton3.addEventListener("click", () => {
              const newPrice3 = prompt("Ingrese el nuevo precio 3:");
              if (newPrice3 !== null) {
                actualizarPrecio(producto.CodigoProducto, "precio3", newPrice3);
              }
            });

            const editButton4 = newRow.querySelector(".editButton4");
            editButton4.addEventListener("click", () => {
              const newPrice4 = prompt("Ingrese el nuevo precio 4:");
              if (newPrice4 !== null) {
                actualizarPrecio(producto.CodigoProducto, "precio4", newPrice4);
              }
            });

            const editButton5 = newRow.querySelector(".editButton5");
            editButton5.addEventListener("click", () => {
              const newPrice5 = prompt("Ingrese el nuevo precio 5:");
              if (newPrice5 !== null) {
                actualizarPrecio(producto.CodigoProducto, "precio5", newPrice5);
              }
            });
          });
        }
      })
      .catch((error) => console.error("Error al buscar productos:", error));
  });

  document.getElementById("filterButton").addEventListener("click", () => {
    const selectedCategory = document.getElementById("categorySelect").value;
    fetch(`/filtrar?subgrupo=${selectedCategory}`)
      .then((response) => response.json())
      .then((data) => {
        const resultsBody = document.getElementById("resultsBody");
        const resultsContainer = document.getElementById("results");

        resultsBody.innerHTML = "";

        if (data.length === 0) {
          resultsContainer.style.display = "none";
        } else {
          resultsContainer.style.display = "block";
          data.forEach((producto) => {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
              <td>${producto.CodigoProducto}</td>
              <td>$${producto.precio1} <br><br> <button class="editButton1">Editar 1</button></td>
              <td>$${producto.precio2} <br><br> <button class="editButton2">Editar 2</button></td>
              <td>$${producto.precio3} <br><br> <button class="editButton3">Editar 3</button></td>
              <td>$${producto.precio4} <br><br> <button class="editButton4">Editar 4</button></td>
              <td>$${producto.precio5} <br><br> <button class="editButton5">Editar 5</button></td>
              <td>${producto.Subgrupo}</td>
            `;
            resultsBody.appendChild(newRow);

            const editButton1 = newRow.querySelector(".editButton1");
            editButton1.addEventListener("click", () => {
              const newPrice1 = prompt("Ingrese el nuevo precio 1:");
              if (newPrice1 !== null) {
                actualizarPrecio(producto.CodigoProducto, "precio1", newPrice1);
              }
            });

            const editButton2 = newRow.querySelector(".editButton2");
            editButton2.addEventListener("click", () => {
              const newPrice2 = prompt("Ingrese el nuevo precio 2:");
              if (newPrice2 !== null) {
                actualizarPrecio(producto.CodigoProducto, "precio2", newPrice2);
              }
            });

            const editButton3 = newRow.querySelector(".editButton3");
            editButton3.addEventListener("click", () => {
              const newPrice3 = prompt("Ingrese el nuevo precio 3:");
              if (newPrice3 !== null) {
                actualizarPrecio(producto.CodigoProducto, "precio3", newPrice3);
              }
            });

            const editButton4 = newRow.querySelector(".editButton4");
            editButton4.addEventListener("click", () => {
              const newPrice4 = prompt("Ingrese el nuevo precio 4:");
              if (newPrice4 !== null) {
                actualizarPrecio(producto.CodigoProducto, "precio4", newPrice4);
              }
            });

            const editButton5 = newRow.querySelector(".editButton5");
            editButton5.addEventListener("click", () => {
              const newPrice5 = prompt("Ingrese el nuevo precio 5:");
              if (newPrice5 !== null) {
                actualizarPrecio(producto.CodigoProducto, "precio5", newPrice5);
              }
            });
          });
        }
      })
      .catch((error) => console.error("Error al filtrar productos:", error));
  });

  function actualizarPrecio(codigoProducto, campoPrecio, nuevoPrecio) {
    fetch("/actualizarPrecio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        codigoProducto: codigoProducto,
        campoPrecio: campoPrecio,
        nuevoPrecio: nuevoPrecio,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Actualiza los resultados después de actualizar el precio
        actualizarResultados();
        console.log("Precio actualizado exitosamente:", data);
      })
      .catch((error) => {
        console.error("Error al actualizar el precio:", error);
      });
  }

  document.getElementById("categoryFilter").addEventListener("change", () => {
    const categorySelect = document.getElementById("categorySelect");
    const categoryFilterCheckbox = document.getElementById("categoryFilter");

    if (categoryFilterCheckbox.checked) {
      categorySelect.style.display = "block";
    } else {
      categorySelect.style.display = "none";
    }
  });

  document.getElementById("closeButton").addEventListener("click", () => {
    const resultsContainer = document.getElementById("results");
    const keywordInput = document.getElementById("keyword");
    resultsContainer.style.display = "none";
    keywordInput.value = "";
  });
});
