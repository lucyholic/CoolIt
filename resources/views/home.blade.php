@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">

        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Summary</div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Unused Thoughts: </li>
                        <li class="list-group-item">Unused Ideas: </li>
                        <li class="list-group-item">Solutions: </li>
                        <li class="list-group-item">Products: </li>
                    </ul>
                </div>
            </div>
            <br />

            <div class="card">
                <div class="card-header">My Fridge</div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Thoughts</h5>
                              <div class="list-group list-group-flush">
                                    <a href="#" class="list-group-item">Thought 1</a>
                                    <a href="#" class="list-group-item">Thought 2</a>
                                    <a href="#" class="list-group-item">Thought 3</a>
                                {{-- @foreach($unused_thoughts as $thought)
                                    <a href="#" class="list-group-item">{{ $thought->description }}</a>
                                @endforeach --}}
                              </div>
                              <a href="#" class="btn btn-outline-primary">Add a Thought</a>
                              <a href="#" class="btn btn-outline-primary">Manage Thoughts</a>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Ideas</h5>
                              <div class="list-group list-group-flush">
                                    <a href="#" class="list-group-item">Idea 1</a>
                                    <a href="#" class="list-group-item">Idea 2</a>
                                    <a href="#" class="list-group-item">Idea 3</a>
                                {{-- @foreach($unused_ideas as $idea)
                                    <a href="#" class="list-group-item">{{ $idea->description }}</a>
                                @endforeach --}}
                              </div>
                              <a href="#" class="btn btn-outline-primary">Add an Idea</a>
                              <a href="#" class="btn btn-outline-primary">Manage Ideas</a>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
            <br />
            <div class="card">
                <div class="card-header">My Shelf</div>

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Solutions</h5>
                                    <div class="list-group list-group-flush">
                                        <a href="#" class="list-group-item">Solution 1</a>
                                        <a href="#" class="list-group-item">Solution 2</a>
                                        <a href="#" class="list-group-item">Solution 3</a>
                                    {{-- @foreach($solutions as $solution)
                                        <a href="#" class="list-group-item">{{ $solution->description }}</a>
                                    @endforeach --}}
                                    </div>
                                    <a href="#" class="btn btn-outline-primary">Add a Solution</a>
                                    <a href="#" class="btn btn-outline-primary">Manage Solutions</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Products</h5>
                                    <div class="list-group list-group-flush">
                                        <a href="#" class="list-group-item">Product 1</a>
                                        <a href="#" class="list-group-item">Product 2</a>
                                        <a href="#" class="list-group-item">Product 3</a>
                                    {{-- @foreach($products as $product)
                                        <a href="#" class="list-group-item">{{ $product->description }}</a>
                                    @endforeach --}}
                                    </div>
                                    <a href="#" class="btn btn-outline-primary">Add a product</a>
                                    <a href="#" class="btn btn-outline-primary">Manage products</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
