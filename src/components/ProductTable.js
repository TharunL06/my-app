import React from 'react';
import * as MUI from '@mui/material';

const ProductTable = ({ products, isLoading, error }) => {
    if (isLoading) return <MUI.Typography variant="h6">Loading...</MUI.Typography>;
    if (error) return <MUI.Typography variant="h6" color="error">Error: {error.message}</MUI.Typography>;

    return (
        <MUI.TableContainer component={MUI.Paper}>
            <MUI.Table aria-label="products table">
                <MUI.TableHead>
                    <MUI.TableRow>
                        <MUI.TableCell>ID</MUI.TableCell>
                        <MUI.TableCell>Title</MUI.TableCell>
                        <MUI.TableCell>Description</MUI.TableCell>
                        <MUI.TableCell align="right">Price</MUI.TableCell>
                    </MUI.TableRow>
                </MUI.TableHead>
                <MUI.TableBody>
                    {products.map((product) => (
                        <MUI.TableRow key={product.id}>
                            <MUI.TableCell>{product.id}</MUI.TableCell>
                            <MUI.TableCell>{product.title}</MUI.TableCell>
                            <MUI.TableCell>{product.description}</MUI.TableCell>
                            <MUI.TableCell align="right">{product.price}</MUI.TableCell>
                        </MUI.TableRow>
                    ))}
                </MUI.TableBody>
            </MUI.Table>
        </MUI.TableContainer>
    );
};

export default ProductTable;
